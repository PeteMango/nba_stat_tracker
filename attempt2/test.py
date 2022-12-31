from urllib.request import urlopen
import json

def profile(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData['data']

print(profile("stephen_curry"))

# [
#   {
#     "857883": [
#       "10:00 PM ET",
#       "Warriors",
#       10,
#       0,
#       "Trail Blazers",
#       25,
#       0
#     ],
#     "857884": [
#       "9:00 PM ET",
#       "Nuggets",
#       8,
#       0,
#       "Heat",
#       16,
#       0
#     ],
#   }
# ]

# [
#     {
#         "game_id": "857883",
#         "status": "10:00 PM ET",
#         "home_team_name": "Warriors",
#         "home_team_id": "10",
#         "home_team_score": "0",
#         "away_team_name": "Trail Blazers",
#         "away_team_id": "25",
#         "away_team_score": "0",
#     }
#     {
#         "game_id": "857884",
#         "status": "9:00 PM ET",
#         "home_team_name": "Nuggets",
#         "home_team_id": "8",
#         "home_team_score": "0",
#         "away_team_name": "Heat",
#         "away_team_id": "16",
#         "away_team_score": "0",
#     }
# ]
import datetime as date

today = date.today()
def gameTeamResults(date):
    link = f"https://www.balldontlie.io/api/v1/games?start_date={date}&end_date={date}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]

def gameTeamResultsFiltered(date):
    gameResults = gameTeamResults(date)
    gameDict = [{}]
    for i in range(len(gameResults)):
        gameDict[0][gameResults[i]['id']] = []
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['status'])
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['home_team']['name'])
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['home_team']['id'])
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['home_team_score'])
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['visitor_team']['name'])
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['visitor_team']['id'])
        gameDict[0][gameResults[i]['id']].append(gameResults[i]['visitor_team_score'])
    return gameDict

print(gameTeamResultsFiltered(today))