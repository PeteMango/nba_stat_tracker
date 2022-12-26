import pandas as pd
from nba_api.stats.static import teams
from nba_api.stats.static import players
from nba_api.live.nba.endpoints import scoreboard

from flask import Flask, jsonify
app = Flask(__name__)
app.run(debug=1)

@app.route('/player')
def get_player():
    nba_players = players.get_active_players()
    target = None
    for player in nba_players:
        if player['full_name'] == "Stephen Curry":
            target = player
            break
    
    return jsonify(player)

