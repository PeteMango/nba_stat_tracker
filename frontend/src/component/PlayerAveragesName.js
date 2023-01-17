import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerAveragesName() {
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");

  var words = name.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  words = words.join(" ");

  const [stats, setStats] = useState([]);

  const [input2, setInput2] = useState("");
  const [date, setDate] = useState(input2);

  const handleChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleClick = () => {
    setDate(input2);
  };

  useEffect(() => {
    const theName = name;
    const theYear = date;
    var theUrl = "/api/player/stats/averages/full/".concat(theName);

    theUrl = theUrl.concat("/");
    theUrl = theUrl.concat(theYear);

    axios
      .get(theUrl, {})
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name, date]);

  //   useEffect(() => {
  //     const theName = name;
  //     const theUrl = "/api/player/stats/averages/".concat(theName);

  //     axios
  //       .get(theUrl, {})
  //       .then((res) => {
  //         setStats(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [name]);

  return (
    <div className="mt-14">
      <div className="flex">
        <input
          type="number"
          min="1947"
          max="2022"
          onChange={handleChange2}
          placeholder="Year"
          className="border-2 border-black flex-auto mx-8 my-2 rounded-full p-2 px-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        ></input>
      </div>
      <div className="flex">
        <button onClick={handleClick} className="border-2 border-black rounded-full mx-14 flex-auto p-1 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          Submit
        </button>
      </div>
      <div className="text-center mt-2 py-2 border-2 border-b-black">{words}'s Season Statistics</div>
      {stats.map((stat) => (
        <div
          key={stat.player_id}
          className="p-5 m-2 grid grid-cols-2"
        >
          <div>Points Per Game:</div>
          <div className="text-right">{stat.pts}</div>
          <div>Rebounds Per Game:</div>
          <div className="text-right">{stat.reb}</div>
          <div>Offensive Rebounds:</div>
          <div className="text-right">{stat.oreb}</div>
          <div>Defensive Rebounds</div>
          <div className="text-right">{stat.dreb}</div>
          <div>Assists Per Game:</div>
          <div className="text-right">{stat.ast}</div>
          <div>Steals Per Game:</div>
          <div className="text-right">{stat.stl}</div>
          <div>Blocks Per Game:</div>
          <div className="text-right">{stat.blk}</div>
          <div>Field Goals:</div>
          <div className="text-right">
            {stat.fgm}/{stat.fga}
          </div>
          <div>Field Goal %:</div>
          <div className="text-right">{(stat.fg_pct * 100).toFixed(2)}%</div>
          <div>3 Pointers:</div>
          <div className="text-right">
            {stat.fg3m}/{stat.fg3a}
          </div>
          <div>3 Point %:</div>
          <div className="text-right">{(stat.fg3_pct * 100).toFixed(2)}%</div>
          <div>Free Throws:</div>
          <div className="text-right">
            {stat.ftm}/{stat.fta}
          </div>
          <div>Free Throw %</div>
          <div className="text-right">{(stat.ft_pct * 100).toFixed(2)}%</div>
          <div>Games Played</div>
          <div className="text-right">{stat.games_played}</div>
          <div>Minutes:</div>
          <div className="text-right">{stat.min}</div>
          <div>Personal Fouls:</div>
          <div className="text-right">{stat.pf}</div>
          <div>Turnovers:</div>
          <div className="text-right">{stat.turnover}</div>
        </div>
      ))}
    </div>
  );
}

export default PlayerAveragesName;
