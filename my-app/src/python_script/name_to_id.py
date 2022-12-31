from nba_api.stats.static import teams
from nba_api.stats.static import players
from nba_api.live.nba.endpoints import scoreboard

def name_to_id (full_name):
    nba_players = players.get_active_players()
    target = None
    for player in nba_players:
        if player['full_name'] == full_name:
            target = player
            break
    return target['id']