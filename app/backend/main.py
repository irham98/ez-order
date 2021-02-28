

import bcrypt
import hashlib
import base64
import firebase_admin
from firebase_admin import auth
from firebase_admin import credentials
from firebase_admin import firestore
import os
import pytz
from datetime import datetime, timedelta




def gen_hash(password):
    return base64.b64encode(hashlib.sha512(password.encode()).digest()).decode()

def handle_login(vendor_id, password, client):
    def gen_token():
        token = bcrypt.hashpw(base64.b64encode(hashlib.sha256(vendor_id.encode()).digest()), bcrypt.gensalt()).decode()
        til = datetime.now(pytz.timezone('Asia/Singapore')) + timedelta(days = 1)
        return token, til
    
    record = client.collection(u'vendor').document(vendor_id).get().to_dict()
    if record == None:
        return {
            'code' : '404 Not Found',
            'message': 'The requested username is not found.'
        }
    elif record['hashed'] != gen_hash(password):
        print(password)
        print(gen_hash(password))
        return {
            'code' : '403 Forbidden',
            'message' : 'The provided message is incorrect.'
        }
    else:
        token, tli = gen_token()
        client.collection(u'user_token').document(vendor_id).set({'tli' : tli, 'token' : token})
        return {
            'code' : '200 OK',
            'message' : token
        }

def register(vendor_id, password, client):
    if client.collection('vendor').document(vendor_id).get().exists:
        return {
            'code' : '409 Duplicate Records',
            'message' : 'The username has already existed.'
        }
    else:
        try:
            hashed = gen_hash(password)
            client.collection('vendor').document(vendor_id).set({'hashed' : hashed})
            return {
                'code' : '200 OK',
                'message' : 'Registered successfully.'
            }
        except:
            return {
                'code' : '0 Unknown Error',
                'message' : 'OmegaLUL'
            }
