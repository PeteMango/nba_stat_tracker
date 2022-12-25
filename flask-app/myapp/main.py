from flask import Blueprint
from .extensions import mongo

main = Blueprint('main', __name__)

@main.route('/')
def index():
    player_collection = mongo.db.users
    player_collection.insert({'name': 'Steph Curry'})
    return '<h1>Added a Player!</h1>'   

