import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function PlayerPreviousGames() {
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
    const theUrl = "/api/player/stats/games/".concat(theName);

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
          placeholder="Search for Player"
        ></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      {/* prettier-ignore */}
      {stats.map((stat) => (
        <div key={stat.game.id}>
          <h1>______________________________________________</h1>
          <div>Status: {stat.game.status}</div>
          <div>Date: {stat.game.date}</div>
          <div>Points: {stat.pts}</div>
          <div>
            Rebounds: {stat.reb} - {stat.oreb} Off., {stat.dreb} Def.
          </div>
          <div>Assists: {stat.ast}</div>
          <div>Steals: {stat.stl}</div>
          <div>Blocks: {stat.blk}</div>
          <div>
            Field Goals: {stat.fgm}/{stat.fga} - {stat.fg_pct}%
          </div>
          <div>
            3 Pointers: {stat.fg3m}/{stat.fg3a} - {stat.fg3_pct}%
          </div>
          <div>
            Free Throws: {stat.ftm}/{stat.fta} - {stat.ft_pct}%
          </div>
          <div>Minutes: {stat.min}</div>
          <div>Personal Fouls: {stat.pf}</div>
          <div>Turnovers: {stat.turnover}</div>
          <div> Game ID: {stat.game.id}</div>
          <Link to={`/boxscores/game?id=${stat.game.id}`}>
            Link to Box Score
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PlayerPreviousGames;
