import pandas as pd
import re 
from nba_api.stats.static import teams
from nba_api.stats.static import players
from nba_api.live.nba.endpoints import scoreboard

from flask import Flask, jsonify
app = Flask(__name__)
app.run(debug=1)

@app.route('/player/<int:id>')
def player_profile(id):
    nba_players = players.get_active_players()
    target = None
    for player in nba_players:
        if player['id'] == id:
            target = player
            break
    return jsonify(target)
