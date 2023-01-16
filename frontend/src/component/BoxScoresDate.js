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
    <div className="mt-14">
      <div className="border-2 border-b-black pb-4">
        <div className="flex justify-center py-4 px-16">
          <input
            type="date"
            onChange={handleChange}
            className="rounded-full flex-auto py-2 px-4 text-black border-2 border-black transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="border-2 border-black py-1 flex-auto mx-16 rounded-full mb-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Submit
          </button>
        </div>
        <Link
          to={`/topperformers/date?date=${date}`}
          className="flex flex-auto py-1 justify-center border-2 border-black mx-16 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Check The Dates Top Players!
        </Link>
      </div>
      <div className="grid grid-cols-2 mt-4">
        {/* <div className="grid grid-cols-3">

        </div> */}
        {stats.map((stat) => (
          <div key={stat.id} className="border-2 border-black m-3 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
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
