import React, {useState, useEffect} from 'react';
import axios from "axios";

function TodayBoxScores() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const theUrl = '/api/games/boxscores'
    axios.get(theUrl, {
    }).then(res => {
      setGames(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div>
      {
        games.map(game => (
        <div key={game.game_id}>
            <div>________________________________________</div>
            <div>Status: {game.status}</div>
            <div>Home: {game.home_team_name} - {game.home_team_score}</div>
            <div>Away: {game.away_team_name} - {game.away_team_score}</div>
          </div>
        ))
      }
    </div>
  );
}

export default TodayBoxScores;

//[
//  {
//      'game_id': 857886, 
//      'status': '8:00 PM ET', 
//      'home_team_name': 'Bucks', 
//      'home_team_id': 17, 
//      'home_team_score': 0, 
//      'away_team_name': 'Timberwolves', 
//      'away_team_id': 18, 
//      'away_team_score': 0
//  }
//]