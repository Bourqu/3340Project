from urllib import response
from flask import Flask, Blueprint, request, jsonify
from .models import User
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager
from . import db

auth = Blueprint('auth', __name__)

## this is our login route.  If the login is successful, it returns a token. Else, throws 401 error.

@auth.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()
    if not user or user.password != password:
        return 401
    
    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response

## this is our register route

@auth.route('/register', methods=["POST"])
def register():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    ## check to ensure that email is not already taken by somebody
    user = User(email=email, password=password)
    db.session.add(user)
    db.session.commit()
    response = {"registered": "yes"}
    return response, 200

auth.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "idk bro idek"
    }

    return response_body

## these next two routes are not to be kept in the final app and were just to test the endpoint configuration

@auth.route('/ourNames', methods=['GET', 'POST'])
def ourNames():
    return {"ourNames": ["Dylan", "Danielle", "Najia", "Deepali", "Mike", "Jason"]}

@auth.route('/items', methods=['GET', 'POST'])
def items():
    return {"items": ["Milk", "Honey", "The King James Bible", "Tim Horton's Dark Roast", "Boxing Gloves", "IDFK man"]}
