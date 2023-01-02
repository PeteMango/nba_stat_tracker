import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TeamLastXGames() {
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
    <div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for Team for Last Games"
        ></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      {stats.map((stat) => (
        <div key={stat.id}>
          <h1>__________________________________________________________</h1>
          <h1>
            Home: {stat.home_team.full_name} - {stat.home_team_score}
          </h1>
          <h1>
            Away: {stat.visitor_team.full_name} - {stat.visitor_team_score}
          </h1>
          <h1>Date: {stat.date}</h1>
          <h1> Game ID: {stat.id}</h1>
          <Link to={`/boxscores/game?id=${stat.id}`}>Link to Box Score</Link>
        </div>
      ))}
    </div>
  );
}

export default TeamLastXGames;
