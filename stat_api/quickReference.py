import pandas as pd

from nba_api.stats.static import teams
from nba_api.stats.static import players

#finding the IDs of teams and players
nba_teams = teams.get_teams()
team = [team for team in nba_teams if team['full_name'] == 'Golden State Warriors'][0]
# print(team)
    # outputs {'id': 1610612744, 'full_name': 'Golden State Warriors', 'abbreviation': 'GSW', 'nickname': 'Warriors', 'city': 'Golden State', 'state': 'California', 'year_founded': 1946}

nba_players = players.get_players()
player = [player for player in nba_players if player['full_name'] == 'Norman Powell'][0]
print(player)
    # outputs {'id': 1626181, 'full_name': 'Norman Powell', 'first_name': 'Norman', 'last_name': 'Powell', 'is_active': True}


from nba_api.stats.endpoints import leaguegamefinder
# finding team id
celtics = [team for team in nba_teams if team['abbreviation'] == 'BOS'][0]
bos_id = celtics['id']

# finding the last game id the team played
gamefinder = leaguegamefinder.LeagueGameFinder(team_id_nullable=bos_id)
games = gamefinder.get_data_frames()[0]
games_2022 = games[games.SEASON_ID.str[-4:] == '2022'] #games in 2022
last_game = games_2022.sort_values('GAME_DATE').iloc[-1]
last_game_id = last_game.GAME_ID

#finding the box score for both teams in the game
result = leaguegamefinder.LeagueGameFinder()
all_games = result.get_data_frames()[0]
full_game = all_games[all_games.GAME_ID == last_game_id]
# print(full_game)



#listing games today
from datetime import datetime, timezone
from dateutil import parser
from nba_api.live.nba.endpoints import scoreboard

f = "{gameId}: {awayTeam} vs. {homeTeam} @ {gameTimeLTZ}"

board = scoreboard.ScoreBoard()
# print("ScoreBoardDate: " + board.score_board_date)
games = board.games.get_dict()
for game in games:
    gameTimeLTZ = parser.parse(game["gameTimeUTC"]).replace(tzinfo=timezone.utc).astimezone(tz=None)
    # print(f.format(gameId=game['gameId'], awayTeam=game['awayTeam']['teamName'], homeTeam=game['homeTeam']['teamName'], gameTimeLTZ=gameTimeLTZ))


#getting box scores
from nba_api.live.nba.endpoints import boxscore
box = boxscore.BoxScore(last_game_id)
boxScore = box.game.get_dict()
# print(boxScore)

# {'status': 'ACTIVE', 'order': 2, 'personId': 1628369, 'jerseyNum': '0', 'position': 'PF', 'starter': '1', 'oncourt': '0', 'played': '1', 
#   'statistics': {'assists': 5, 'blocks': 0, 'blocksReceived': 3, 'fieldGoalsAttempted': 22, 'fieldGoalsMade': 10, 'fieldGoalsPercentage': 0.45454545454545503, 'foulsOffensive': 1, 'foulsDrawn': 6, 'foulsPersonal': 3, 'foulsTechnical': 0, 'freeThrowsAttempted': 11, 'freeThrowsMade': 9, 'freeThrowsPercentage': 0.818181818181818, 'minus': 82.0, 'minutes': 'PT35M00.00S', 'minutesCalculated': 'PT35M', 'plus': 93.0, 'plusMinusPoints': 11.0, 'points': 30, 'pointsFastBreak': 6, 'pointsInThePaint': 16, 'pointsSecondChance': 4, 'reboundsDefensive': 6, 'reboundsOffensive': 2, 'reboundsTotal': 8, 'steals': 1, 'threePointersAttempted': 6, 'threePointersMade': 1, 'threePointersPercentage': 0.166666666666667, 'turnovers': 3, 'twoPointersAttempted': 16, 'twoPointersMade': 9, 'twoPointersPercentage': 0.5625},
#    'name': 'Jayson Tatum', 'nameI': 'J. Tatum', 'firstName': 'Jayson', 'familyName': 'Tatum'}

#formatted
playersHome = box.home_team.get_dict()['players']
playersAway = box.away_team.get_dict()['players']
f = "{player_id}: {name}: {points} PTS, {reboundsTotal} REB, {assists} AST, {steals} STL, {blocks} BLK"
# for player in playersHome:
#     print(f.format(player_id=player['personId'], name=player['name'], points=player['statistics']['points'], reboundsTotal=player['statistics']['reboundsTotal'], assists=player['statistics']['assists'], steals=player['statistics']['steals'], blocks=player['statistics']['blocks']))

# for player in playersAway:
#     print(f.format(player_id=player['personId'], name=player['name'], points=player['statistics']['points'], reboundsTotal=player['statistics']['reboundsTotal'], assists=player['statistics']['assists'], steals=player['statistics']['steals'], blocks=player['statistics']['blocks']))


#finding the play by play
from nba_api.stats.endpoints import playbyplayv2
pbp = playbyplayv2.PlayByPlayV2(last_game_id)
pbp = pbp.get_data_frames()[0]
pbp.head()
# print(pbp)

# from nba_api.live.nba.endpoints import playbyplay
# pbp2 = playbyplay.PlayByPlay(last_game_id)
# line = "{action_number}: {period}:{clock} {player_id} ({action_type})"
# actions = pbp2.get_dict()['game']['actions']
# for action in actions:
#     player_name = ''
#     player = players.find_player_by_id(action['personId'])
#     if player is not None:
#         player_name = player['full_name']
#     print(line.format(action_number=action['actionNumber'],period=action['period'],clock=action['clock'],action_type=action['actionType'],player_id=player_name))