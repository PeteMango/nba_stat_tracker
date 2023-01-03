import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TopPerformersDate() {
  const queryParameters = new URLSearchParams(window.location.search);
  const date = queryParameters.get("date");
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // 857877
    const theName = String(date);
    const theUrl = "/api/player/stats/bestplayers/".concat(theName);

    axios
      .get(theUrl, {})
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  return (
    <div>
      {stats.map((stat) => (
        <div key={stat.playerID}>
          <h1>_____________________________________________________________</h1>
          <h1>
            Name: {stat.playerFirstName} {stat.playerLastName}
          </h1>
          <h1>Team: {stat.team}</h1>
          <h1>Score: {stat.score}</h1>
          <h1>
            <Link to={`/boxscores/game?id=${stat.gameID}`}>
              Link to Box Score
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default TopPerformersDate;
