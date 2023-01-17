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
    <div className="text-center mt-14">
      <div>Best Players in Each Game on {date}</div>
      <div className="grid grid-cols-1">
        {stats.map((stat) => (
          <div
            className="border-2 border-black mx-6 my-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            key={stat.playerID}
          >
            <Link to={`/boxscores/game?id=${stat.gameID}`} className="flex">
              <div className="flex-auto basis-2/3 text-left mx-2 my-1">
                <h1>
                  {stat.playerFirstName} {stat.playerLastName}
                </h1>
                <h1>{stat.playerTeam}</h1>
              </div>
              <div className="flex-auto basis-1/3 my-1 mx-2">
                <h1>Score: {stat.score}</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPerformersDate;
