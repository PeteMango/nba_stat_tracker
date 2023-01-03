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
      {stats.map((stat) => (
        <div key={stat.id}>
          <h1>_______________________________________</h1>
          <h1>Status: {stat.status}</h1>
          <h1>
            Home: {stat.home_team.full_name} - {stat.home_team_score}
          </h1>
          <h1>
            Away: {stat.visitor_team.full_name} - {stat.visitor_team_score}
          </h1>
          <Link to={`/boxscores/game?id=${stat.id}`}>Link to Box Score</Link>
        </div>
      ))}
    </div>
  );
}

export default BoxScoresDate;
