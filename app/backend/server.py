from fastapi import FastAPI
import main
import bcrypt
import hashlib
import base64
import firebase_admin
import json
from firebase_admin import auth
from firebase_admin import credentials
from firebase_admin import firestore
import os
import pytz
from datetime import datetime, timedelta


cred = credentials.Certificate('C:/Users/Hoang/ez_order/ez-order-1bb09-firebase-adminsdk-3zx5f-4ea1383d8b.json')
firebase_admin.initialize_app(cred)   
db = firestore.client()
app = FastAPI()

@app.post("/login")
async def login(request):
   
    request = json.loads(request)
    vendor_id = request["body"]["vendor_id"]
    password = request["body"]["password"]
   

    return main.handle_login(vendor_id, password, db)
