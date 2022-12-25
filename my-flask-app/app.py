import pandas
from nba_api.stats.static import teams
from nba_api.stats.static import players

from flask import Flask, request, url_for, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://petemango:mc4VOkwpfFT0wmoF@nba-stat-tracker.z76bfbc.mongodb.net/test'
mongo = PyMongo(app)

@app.route('/')
def index():
    return '''
        <form method="POST" action="/create" enctype="multipart/form-data">
            <input type="submit"> 
        <form>
    '''

@app.route('/create', methods=['POST'])
def create():
    nba_players = players.get_players()
    for player in nba_players:
        activity = None
        if player['is_active'] == 'True':
            activity = 1
        else:
            activity = 0
        mongo.db.players.insert_one({
            'id': player['id'],
            'name': player['full_name'],
            'is_active': activity
        })
    return 'Done!'

@app.route('/find-player', methods=['GET', 'POST'])
def find():
    return '''
        <form method="POST" action="/stats" enctype="multipart/form-data">
            <input type="text" name="player-name">
            <input type="submit"> 
        <form>
    '''

@app.route('/stats', methods=['GET', 'POST'])
def player_stats():
    player = mongo.db.players.find_one({'name':request.form.get('player-name')})
    id = player['id']
    name = player['name']
    activity = player['is_active']

    return f'id:{id}\nname:{name}\nactivity:{activity}'