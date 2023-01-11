import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TeamLastXGamesName() {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const theName = name;
    const theUrl = "/api/team/games/".concat(theName);

    axios
      .get(theUrl, {})
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <div className="mt-10">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="border-2 border-lime-500 m-2 p-4 text-center"
        >
          <Link to={`/boxscores/game?id=${stat.id}`}>
            <h1>{stat.date.slice(0, 10)}</h1>
            <div className="flex">
              <div className="flex-auto text-left">
                <h1>{stat.home_team.full_name}</h1>
                <h1>{stat.visitor_team.full_name}</h1>
              </div>
              <div className="flex-auto text-right">
                <h1>{stat.home_team_score}</h1>
                <h1>{stat.visitor_team_score}</h1>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TeamLastXGamesName;
