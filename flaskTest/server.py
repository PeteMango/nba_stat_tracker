from flask import Flask
from nba_api.stats.static import teams

app = Flask(__name__)

@app.route("/")
def mainRoute():
    nba_teams = teams.get_teams()
    team = [team for team in nba_teams if team['full_name'] == 'Golden State Warriors'][0]
    return team

if __name__ == "__main__":
    app.run(debug=True)