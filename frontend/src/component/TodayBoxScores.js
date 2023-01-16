import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TodayBoxScores() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const theUrl = "/api/games/boxscores";
    axios
      .get(theUrl, {})
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mt-12 grid grid-cols-2">
      {games.map((game) => (
        <div key={game.game_id} className="border-2 border-gray-500 m-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={`/boxscores/game?id=${game.game_id}`}>
            <div className="text-center">{game.status}</div>
            <div className="flex">
              <div className="flex-auto text-left py-1 px-3">
                <h1>{game.home_team_name}</h1>
                <h1>{game.away_team_name}</h1>
              </div>
              <div className="flex-auto text-right py-1 px-3">
                <h1>{game.home_team_score}</h1>
                <h1>{game.away_team_score}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
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
