from nba_api.stats.static import players
from nba_api.live.nba.endpoints import boxscore
from nba_api.live.nba.endpoints import scoreboard
from nba_api.stats.endpoints import commonplayerinfo

player_info = commonplayerinfo.CommonPlayerInfo(player_id=2544)
dict = player_info.available_seasons.get_dict(player_id=2544)
print(dict)

# print(players.find_players_by_full_name('lebron james'))

# Today's Score Board
games = scoreboard.ScoreBoard()

# json
# games.get_json()

# dictionary
games = games.get_dict()
# print(games)

box = boxscore.BoxScore()

box = box.get_dict()
print(box)

