# teamIDs = ["hawks", "celtics", "nets", "hornets", "bulls", "cavaliers", "mavericks", "nuggets", "pistons", "warriors", "rockets", "pacers", "clippers", "lakers", "grizzlies", "heat", "bucks", "timberwolves", "pelicans", "knicks", "thunder", "magic", "76ers", "suns", "trailblazers", "kings", "spurs", "raptors", "jazz", "wizards"]
# print(len(teamIDs))
# for x in range(len(teamIDs)):
#     print(teamIDs[x], end='')
#     print(x)

import pandas as ps
import json
from urllib.request import urlopen
# Use read_json in pandas to read the JSON file and assign it to a variable.
# df = ps.read_json('https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=210')
# x = 
# df = json.loads(df)
# print(df)

# def link(name):
#     name = name.lower()
#     name = name.replace(' ', '_')
#     ret = f"https://www.balldontlie.io/api/v1/players?search={name}"
#     return ret

# url = link("norman powell")
# response = urlopen(url)
# data_json = json.loads(response.read())
# print(data_json["data"][0]['id'])

# def findPlayerID(name):
#     name = name.lower()
#     name = name.replace(' ', '_')
#     link = f"https://www.balldontlie.io/api/v1/players?search={name}"
#     response = urlopen(link)
#     jsonData = json.loads(response.read())
#     id = jsonData["data"][0]["id"]
#     return id

# player = "lebron james"
# print(findPlayerID(player))

# url = 'https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=210'
# response = urlopen(url)
# data_json = json.loads(response.read())
# print(data_json["data"][0]["ast"])


yesterday = "2022-12-30"
def findGameIDsOnDate(date):
    IDs = []
    link = f"https://www.balldontlie.io/api/v1/games?start_date={date}&end_date={date}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    print(jsonData["data"])
    for i in range(len(jsonData['data'])):
        IDs.append(jsonData['data'][i]['id'])
    return IDs

# print(findGameIDsOnDate(yesterday))
# IDList = findGameIDsOnDate(yesterday)

def getStatsFromGame(gameID):
    link = f"https://www.balldontlie.io/api/v1/games/{gameID}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    print(jsonData)

# for i in range(len(IDList)):
#     getStatsFromGame(IDList[i])

from datetime import date, timedelta
today = date.today()
# print(today)

def gameTeamResults():
    link = f"https://www.balldontlie.io/api/v1/games?start_date={today}&end_date={today}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]

# gameResults = gameTeamResults()
# # print(gameResults[0]['home_team']['id'])
# gameDict = {}
# for i in range(len(gameResults)):
#     gameDict[gameResults[i]['id']] = []
#     gameDict[gameResults[i]['id']].append(gameResults[i]['status'])
#     gameDict[gameResults[i]['id']].append(gameResults[i]['home_team']['id'])
#     gameDict[gameResults[i]['id']].append(gameResults[i]['home_team']['name'])
#     gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team']['id'])
#     gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team']['name'])

# print(gameDict)

def gameTeamResultsFiltered():
    gameResults = gameTeamResults()
    gameDict = {}
    for i in range(len(gameResults)):
        gameDict[gameResults[i]['id']] = []
        gameDict[gameResults[i]['id']].append(gameResults[i]['status'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['home_team']['id'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['home_team']['name'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team']['id'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team']['name'])
    return gameDict

print(len(gameTeamResultsFiltered()))

#find latest game by a certain player

def gameTeamResults(date):
    link = f"https://www.balldontlie.io/api/v1/games?start_date={date}&end_date={date}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData["data"]

def gameTeamResultsFiltered(date):
    gameResults = gameTeamResults(date)
    gameDict = {}
    for i in range(len(gameResults)):
        gameDict[gameResults[i]['id']] = []
        gameDict[gameResults[i]['id']].append(gameResults[i]['status'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['home_team']['name'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['home_team']['id'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['home_team_score'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team']['name'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team']['id'])
        gameDict[gameResults[i]['id']].append(gameResults[i]['visitor_team_score'])
    return gameDict

# print(date.today())
day = "2022-12-29"
print(gameTeamResultsFiltered(day))
info = gameTeamResultsFiltered(day)
for item in info:
    print(item)
# print(gameTeamResults(day))

def findPlayerID(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    id = jsonData["data"][0]["id"]
    return id

def profile(name):
    name = name.lower()
    name = name.replace(' ', '_')
    link = f"https://www.balldontlie.io/api/v1/players?search={name}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData

def lastGame(name):
    day = date.today()
    id = findPlayerID(name)
    teamID = profile((name))['data'][0]['team']['id']
    dateFound = False
    ameID = 0
    counter1 = 1
    while dateFound == False:
        # print("day is " + str(day))
        # print("counter1 is " + str(counter1))
        counter1 = counter1 + 1
        info = gameTeamResultsFiltered(day)
        for item in info:
            print(info[item][0])
            print("in")
            counter2 = 1
            # print("counter2 is " + str(counter2))
            counter2 = counter2 + 1
            # print("team id is " + str(teamID) + "and info[item][2] is " + str(info[item][1]) + "and info[item][5] is " + str(info[item][4]))
            if info[item][2] == teamID or info[item][5] == teamID:
                print("yes")
                dateFound = True
                gameID = item
                break
        day = day - timedelta(days = 1)
    
    day = day + timedelta(days = 1)
    link = f"https://www.balldontlie.io/api/v1/stats?game_ids[]={gameID}&player_ids[]={id}"
    response = urlopen(link)
    jsonData = json.loads(response.read())
    return jsonData

lastGame("ja morant")