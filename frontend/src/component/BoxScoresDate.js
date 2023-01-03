import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BoxScoresDate() {
  const [input, setInput] = useState("");
  const [date, setDate] = useState(input);
  const [stats, setStats] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setDate(input);
  };

  useEffect(() => {
    const theDate = date;
    const theUrl = "/api/boxscore/".concat(theDate);

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
      <div>
        <input
          type="date"
          onChange={handleChange}
          placeholder="Search for Date"
        ></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Link to={`/topperformers/date?date=${date}`}>
        Check Today's Top Players!
      </Link>
      <div className="grid grid-cols-2">
        {/* <div className="grid grid-cols-3">

        </div> */}
        {stats.map((stat) => (
          <div key={stat.id} className="border-2 border-purple-800 m-2">
            <Link to={`/boxscores/game?id=${stat.id}`}>
              <div className="text-center">{stat.status}</div>
              <div className="flex">
                <div className="flex-auto text-left py-1 px-3">
                  <h1>{stat.home_team.name}</h1>
                  <h1>{stat.visitor_team.name}</h1>
                </div>
                <div className="flex-auto text-right py-1 px-3">
                  <h1>{stat.home_team_score}</h1>
                  <h1>{stat.visitor_team_score}</h1>
                </div>
              </div>
              {/* <h1 className="text-center">{stat.status}</h1>
              <h1>
                {stat.home_team.name}: {stat.home_team_score}
              </h1>
              <h1>
                {stat.visitor_team.name}: {stat.visitor_team_score}
              </h1> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BoxScoresDate;
