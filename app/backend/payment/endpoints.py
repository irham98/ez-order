from fastapi import APIRouter, Depends, HTTPException
from typing import Optional

from pydantic import BaseModel
import stripe

stripe.api_key = 'sk_test_51HRergGZX8tYpSDZyehTY5LdXjAtmWLq6wxbu0T7TUaSpvFlwr8GXJNJuWs4Cscwt4RWeb8dFxE2ZwzIpWDkhnG500oOTm7VCk'
router = APIRouter()

YOUR_DOMAIN = 'http://127.0.0.1:8000'

class CheckoutSessionResponse(BaseModel):
    id: str

@router.get('/success')
async def success():
    return {'message': 'success'}

@router.get('/cancel')
async def cancel():
    return {'message': 'cancel'}

@router.post('/checkout', response_model=CheckoutSessionResponse)
async def checkout():
    try:
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data': {
                        'currency': 'usd',
                        'unit_amount': 2000,
                        'product_data': {
                            'name': 'Stubborn Attachments',
                            'images': ['https://i.imgur.com/EHyR2nP.png'],
                        },
                    },
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '/payment/success',
            cancel_url=YOUR_DOMAIN + '/payment/cancel',
        )
        return {'id': session.id}
    except Exception as e:
        raise HTTPException(status_code=500, detail='Something went wrong')