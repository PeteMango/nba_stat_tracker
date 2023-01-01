from flask import Flask
app = Flask(__name__)
import json
from urllib.request import urlopen
from datetime import date, timedelta
from nba_api.stats.static import teams
from nba_api.stats.static import players
from nba_api.live.nba.endpoints import scoreboard

def find_inactive(char):
    nba_players = players.get_inactive_players()
    ret = []
    for player in nba_players:
        if player["full_name"][0] == char:
            ret.append(player)
    print(ret)

find_inactive('L')