# ideas: find the boxscores for all the games in a day

from flask import Flask
app = Flask(__name__)
import json
from urllib.request import urlopen
from datetime import date, timedelta

teamIDs = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "76ers", "suns", "trailblazers", "kings", "spurs", "raptors", "jazz", "wizards"]

def findPlayerID(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    id = jsonData["data"][0]["id"]
    return id

def gameTeamResults(date):
    link = f"https://www.balldontlie.io/api/v1/games?start_date={date}&end_date={date}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]

def gameTeamResultsFiltered(date):
    gameResults = gameTeamResults(date)
    gameList = []
    for i in range(len(gameResults)):
        gameDict = {}
        gameDict['game_id'] = gameResults[i]['id']
        gameDict['status'] = gameResults[i]['status']
        gameDict['home_team_name'] = gameResults[i]['home_team']['name']
        gameDict['home_team_id'] = gameResults[i]['home_team']['id']
        gameDict['home_team_score'] = gameResults[i]['home_team_score']
        gameDict['away_team_name'] = gameResults[i]['visitor_team']['name']
        gameDict['away_team_id'] = gameResults[i]['visitor_team']['id']
        gameDict['away_team_score'] = gameResults[i]['visitor_team_score']
        gameList.append(gameDict)
    return gameList

# def gameTeamResultsFiltered(date):
#     gameResults = gameTeamResults(date)
#     gameDict = [{}]
#     for i in range(len(gameResults)):
#         gameDict[0][gameResults[i]['id']] = []
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['status'])
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['home_team']['name'])
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['home_team']['id'])
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['home_team_score'])
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['visitor_team']['name'])
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['visitor_team']['id'])
#         gameDict[0][gameResults[i]['id']].append(gameResults[i]['visitor_team_score'])
#     return gameDict

# yesterday = "2022-12-29"
# def findGameIDsOnDate(date):
    # IDs = []
    # link = f"https://www.balldontlie.io/api/v1/games?start_date={date}&end_date={date}"
    # response = urlopen(link)
    # jsonData = json.loads(response.read())
    # return jsonData["data"]
    # for i in range(len(jsonData['data'])):
    #     IDs.append(jsonData['data'][i]['id'])
    # return IDs

#------------------------------------------------------------------------------------------------------------------

@app.route("/")
def home():
    return "<div>homie</div>"

@app.route("/api/player/profile/<name>") # this route gives json for the information of the player
def profile(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData['data']
# returns {"data":[{"id":115,"first_name":"Stephen","height_feet":6,"height_inches":3,"last_name":"Curry","position":"G","team":{"id":10,"abbreviation":"GSW","city":"Golden State","conference":"West","division":"Pacific","full_name":"Golden State Warriors","name":"Warriors"},"weight_pounds":190}],"meta":{"total_pages":1,"current_page":1,"next_page":null,"per_page":25,"total_count":1}}


@app.route("/api/team/<name>") # gives json for the information of the team
def teams(name):
    name = name.lower()
    index = teamIDs.index(name)
    link = f"https://www.balldontlie.io/api/v1/teams/"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    jsonData = jsonData["data"][index]
    jsonList = []
    jsonList.append(jsonData)
    return jsonList
# returns {"id":28,"abbreviation":"TOR","city":"Toronto","conference":"East","division":"Atlantic","full_name":"Toronto Raptors","name":"Raptors"}

# def teams(name):
#     name = name.lower()
#     index = teamIDs.index(name)
#     link = f"https://www.balldontlie.io/api/v1/teams/"
#     response = urlopen(link)
#     jsonData = json.loads(response.read())
#     jsonData = jsonData["data"][index]
#     return jsonData

@app.route("/api/player/stats/averages/<name>") # gives json for the season averages for the player (i think this may be wrong tho whoever made it is on something)
def averages(name):
    id = findPlayerID(name)
    link = f"https://www.balldontlie.io/api/v1/season_averages?player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]
# returns for curry {"data":[{"games_played":36,"player_id":115,"season":2022,"min":"24:51","fgm":7.28,"fga":14.56,"fg3m":3.64,"fg3a":8.39,"ftm":3.44,"fta":3.75,"oreb":0.44,"dreb":4.31,"reb":4.75,"ast":4.92,"stl":0.75,"blk":0.25,"turnover":2.25,"pf":1.5,"pts":21.64,"fg_pct":0.5,"fg3_pct":0.434,"ft_pct":0.919}]}

@app.route("/api/games/boxscores")
def gameTeamResultsFinal():
    today = date.today()
    return gameTeamResultsFiltered(today)

@app.route("/api/player/stats/lastgame/<name>")
def lastGame(name):
    day = date.today()
    id = findPlayerID(name)
    teamID = profile((name))[0]['team']['id']
    dateFound = False
    gameID = 0
    while dateFound == False:
        info = gameTeamResultsFiltered(day)
        # print(info)
        for i in range(len(info)):
            # print("teamID is: " + str(teamID) + " and info[i]['home_team_id] is: " + str(info[i]['home_team_id']) + " and info[i]['away_team_id] is: " + str(info[i]['away_team_id']))
            if info[i]['home_team_id'] == teamID or info[i]['away_team_id'] == teamID:
                # print("went in")
                if info[i]['status'] == 'Final':
                    # print("went in again")
                    dateFound = True
                    gameID = info[i]['game_id']
                    break
        day = day - timedelta(days = 1)
    
    day = day + timedelta(days = 1)
    link = f"https://www.balldontlie.io/api/v1/stats?game_ids[]={gameID}&player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]

# def lastGame(name):
#     day = date.today()
#     id = findPlayerID(name)
#     teamID = profile((name))[0]['team']['id']
#     dateFound = False
#     gameID = 0
#     while dateFound == False:
#         info = gameTeamResultsFiltered(day)
#         for item in info:
#             if info[item][2] == teamID or info[item][5] == teamID:
#                 if info[item][0] == 'Final':
#                     dateFound = True
#                     gameID = item
#         day = day - timedelta(days = 1)
    
#     day = day + timedelta(days = 1)
#     link = f"https://www.balldontlie.io/api/v1/stats?game_ids[]={gameID}&player_ids[]={id}"
#     response = urlopen(link)
#     jsonData = json.loads(response.read())
#     return jsonData["data"][0]
    




# @app.route("/player/stats/games/<name>/<playoffs>/<season>")
# def games(season, name, playoffs):
#     if playoffs == True:
#         numberGames = 16
#     else:
#         numberGames = 82
#     season = season or 2022
#     id = findPlayerID(name)

#     return redirect(f"https://www.balldontlie.io/api/v1/stats?per_page={numberGames}&seasons[]={season}&player_ids={id}")



if __name__ == '__main__':
    app.run(debug=True)

