from flask import Flask, request, url_for
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://petemango:mc4VOkwpfFT0wmoF@nba-stat-tracker.z76bfbc.mongodb.net/test'
mongo = PyMongo(app)

@app.route('/')
def index():
    return '''
        <form method="POST" action="/create" enctype="multipart/form-data">
            <input type="text" name="player-name">
            <input type="text" name="player-team">
            <input type="text" name="player-points">
            <input type="submit"> 
        <form>
    '''

@app.route('/create', methods=['POST'])
def create():
    mongo.db.players.insert_one({
        'name': request.form.get('player-name'),
        'team': request.form.get('player-team'),
        'points': request.form.get('player-points')
    })
    return 'Done!'