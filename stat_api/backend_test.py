import pymongo
from pymongo import MongoClient

# username: petemango
# password: mc4VOkwpfFT0wmoF

# mongodb+srv://petemango:mc4VOkwpfFT0wmoF@nba-stat-tracker.z76bfbc.mongodb.net/?retryWrites=true&w=majority

cluster = MongoClient("mongodb+srv://petemango:mc4VOkwpfFT0wmoF@nba-stat-tracker.z76bfbc.mongodb.net/?retryWrites=true&w=majority")
database = cluster["player-of-the-day"]
collection = database["player"]

def test_post_player(player):
    date = player['date']
    rank = player['rank']
    name = player['name']
    points = player['points']
    rebounds = player['rebounds']
    assists = player['assists']
    blocks = player['blocks']
    steals = player['steals']

    overall_score = player['score']
    post = {"date":date, "rank":rank, "name":name, "points": points, "rebounds":rebounds, "assists":assists, "NxMs":overall_score}
    collection.insert_one(post)

def main ():
    steph = {
        "date": "2022/12/25",
        "rank": 1,
        "name": "Stephen Curry",
        "points": 96,
        "rebounds": 12,
        "assists": 37,
        "blocks": 42,
        "steals": 35,
        "score": 98
    }
    # print(steph['name'])
    test_post_player(steph)

if __name__ == '__main__':
    main()