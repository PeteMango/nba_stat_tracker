import pandas
from nba_api.stats.static import teams
from nba_api.stats.static import players
from nba_api.live.nba.endpoints import scoreboard

nba_teams = teams.get_teams()
for team in nba_teams:
    print(team)

nba_players = players.get_active_players()
for player in nba_players:
    print(player)

board = scoreboard.ScoreBoard()
games = board.games.get_dict()
for game in games:
    print(game)

