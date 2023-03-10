import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TopPerformers() {
  const [input, setInput] = useState("");
  const [name, setName] = useState(input);
  const [stats, setStats] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setName(input);
  };

  useEffect(() => {
    const theName = name;
    const theUrl = "/api/player/stats/bestplayers/".concat(theName);

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
    <div>
      <div>
        <input type="date" onChange={handleChange}></input>
        <button onClick={handleClick}>Submit</button>
      </div>
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

export default TopPerformers;
