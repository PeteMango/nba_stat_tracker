# ideas: find the boxscores for all the games in a day
# to get a teams last few games boxscores, use:
# https://www.balldontlie.io/api/v1/games?team_ids[]=2&per_page=82&seasons[]=2022 to find the game ids of the last few games
# https://www.balldontlie.io/api/v1/stats?game_ids[]=857877&per_page=50 to find the box scores of each game

from nba_api.live.nba.endpoints import scoreboard
from nba_api.stats.static import players
from nba_api.stats.static import teams
from datetime import date, timedelta
from urllib.request import urlopen
import json
from flask import Flask, jsonify
app = Flask(__name__)

teamIDs = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers",
           "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "76ers", "suns", "trailblazers", "kings", "spurs", "raptors", "jazz", "wizards"]


def get_all_active(char):
    nba_players = players.get_active_players()
    ret = []
    for player in nba_players:
        if (player['first_name'][0] == char):
            ret.append(player)
    return ret


def get_all_inactive(char):
    nba_players = players.get_inactive_players()
    ret = []
    for player in nba_players:
        if (player['full_name'][0] == char):
            ret.append(player)
    return ret


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


def getGameIDfromDate(day):
    gameList = gameTeamResultsFiltered(day)
    gameIDs = []
    for i in range(len(gameList)):
        gameIDs.append(gameList[i]['game_id'])
    return gameIDs


def findBestPlayersfromGames(gameIDs):
    bestScores = []
    for i in range(len(gameIDs)):
        bestScores.append({})
        gameInfo = boxScore(gameIDs[i])
        bestScores[i]['gameID'] = gameIDs[i]
        for j in range(len(gameInfo)):
            pts = gameInfo[j]['pts']
            orb = gameInfo[j]['oreb']
            drb = gameInfo[j]['dreb']
            ast = gameInfo[j]['ast']
            stl = gameInfo[j]['stl']
            blk = gameInfo[j]['blk']
            pf = gameInfo[j]['pf']
            tov = gameInfo[j]['turnover']
            fg = gameInfo[j]['fgm']
            fga = gameInfo[j]['fga']
            ft = gameInfo[j]['ftm']
            fta = gameInfo[j]['fta']
            score = gameScore(pts, orb, drb, ast, stl, blk,
                              pf, tov, fg, fga, ft, fta)
            if j == 0 or score > bestScores[i]['score']:
                bestScores[i]['score'] = score
                bestScores[i]['playerID'] = gameInfo[j]['id']
                bestScores[i]['playerFirstName'] = gameInfo[j]['player']['first_name']
                bestScores[i]['playerLastName'] = gameInfo[j]['player']['last_name']
                bestScores[i]['team'] = gameInfo[j]['team']['full_name']
    bestScores2 = sorted(bestScores, key=lambda i: i['score'], reverse=True)
    return bestScores2


def gameScore(pts, orb, drb, ast, stl, blk, pf, tov, fg, fga, ft, fta):
    return round(1.54798762 * (pts + (0.4 * fg) - (0.7 * fga) - (0.4 * (fta - ft)) + (0.7 * orb) + (0.3 * drb) + stl + (0.7 * ast) + (0.7 * blk) - (0.4 * pf) - tov), 2)

# GmSc - Game Score; the formula is PTS + 0.4 * FG - 0.7 * FGA - 0.4*(FTA - FT) + 0.7 * ORB + 0.3 * DRB + STL + 0.7 * AST + 0.7 * BLK - 0.4 * PF - TOV.
# def gameScore(data):

# ------------------------------------------------------------------------------------------------------------------


@app.route("/")
def home():
    return "<div>homie</div>"


# this route gives json for the information of the player
@app.route("/api/player/profile/<name>")
def profile(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData['data']


@app.route("/api/team/<name>")  # gives json for the information of the team
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


# gives json for the season averages for the player (i think this may be wrong tho whoever made it is on something)
@app.route("/api/player/stats/averages/<name>")
def averages(name):
    id = findPlayerID(name)
    link = f"https://www.balldontlie.io/api/v1/season_averages?player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]


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
        for i in range(len(info)):
            if info[i]['home_team_id'] == teamID or info[i]['away_team_id'] == teamID:
                if info[i]['status'] == 'Final':
                    dateFound = True
                    gameID = info[i]['game_id']
                    break
        day = day - timedelta(days=1)

    day = day + timedelta(days=1)
    link = f"https://www.balldontlie.io/api/v1/stats?game_ids[]={gameID}&player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]


@app.route("/api/team/boxscore/<gameID>")
def boxScore(gameID):
    link = f"https://www.balldontlie.io/api/v1/stats?game_ids[]={gameID}&per_page=50"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]


@app.route("/api/team/games/<team>")
def teamGames(team):
    name = team.lower()
    iD = teamIDs.index(name) + 1
    link = f"https://www.balldontlie.io/api/v1/games?per_page=82&seasons[]=2022&team_ids[]={iD}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    jsonData = jsonData['data']
    jsonData = sorted(jsonData, key=lambda i: i['id'])
    counter = 0
    for i in range(82):
        if (jsonData[i]['status'] != 'Final'):
            break
        counter = counter + 1
    # gameNumber = counter - 1
    newList = jsonData[:counter]
    newList = sorted(newList, key=lambda i: i['id'], reverse=True)
    return newList


@app.route("/api/player/stats/bestplayers/<date>")  # format 2022-12-30
def bestPlayers(date):
    idList = getGameIDfromDate(date)
    best = findBestPlayersfromGames(idList)
    return best


@app.route("/api/player/stats/games/<name>")
def games(name):
    info = []
    id = findPlayerID(name)
    # teamID = profile((name))[0]['team']['id']
    # link = f"https://www.balldontlie.io/api/v1/stats?game_ids[]={gameID}&player_ids[]={id}"
    link = f"https://www.balldontlie.io/api/v1/stats?per_page=82&seasons[]=2022&player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    jsonData = jsonData["data"]
    # return jsonData[16]
    # for i in range(len(jsonData)):
    #     if jsonData[i]['id'] == id:
    #         info.append(jsonData[i])
    jsonData = sorted(jsonData, key=lambda i: i['game']['id'], reverse=True)
    return jsonData


@app.route("/api/boxscore/<date>")
def boxScoreDate(date):
    data = gameTeamResults(date)
    data = sorted(data, key=lambda i: i['id'])
    return data

@app.route("/api/player/stats/averages/full/<name>/<year>") # gives json for the season averages for the player (i think this may be wrong tho whoever made it is on something)
def fullAverages(name, year):
    # year should be 2015 for the 2015-16 season, and so i will slice string by first 4 letters
    year = year[:4]
    id = findPlayerID(name)
    link = f"https://www.balldontlie.io/api/v1/season_averages?season={year}&player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]


@app.route("/api/player/dictionary/active/<char>")
def all_active_players(char):
    char = char.upper()
    return jsonify(get_all_active(char))


@app.route("/api/player/dictionary/inactive/<char>")
def all_inactive_players(char):
    char = char.upper()
    return jsonify(get_all_inactive(char))

# def teamGames(team):
#     name = team.lower()
#     iD = teamIDs.index(name) + 1
#     link = f"https://www.balldontlie.io/api/v1/games?per_page=82&seasons[]=2022&team_ids[]={iD}"
#     response = urlopen(link)
#     jsonData = json.loads(response.read())
#     return jsonData['data']


if __name__ == '__main__':
    app.run(debug=True)
