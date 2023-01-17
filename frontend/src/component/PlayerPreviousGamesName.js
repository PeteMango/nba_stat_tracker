import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PlayerPreviousGamesName() {
  const [stats, setStats] = useState([]);
  const queryParameters = new URLSearchParams(window.location.search);
  const name = queryParameters.get("name");

  var words = name.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words = words.join(" ");

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
    <div className="mt-14">
      {/* prettier-ignore */}
      <div className="text-center hover:underline hover:underline-offset-2 pb-2">
        <Link to={`/player/averages/name?name=${name}`}>{words}'s Season Averages</Link>
      </div>
      {stats.map((stat) => (
        <div className="border-2 border-black m-8 px-8 py-2 mb-10 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to={`/boxscores/game?id=${stat.game.id}`} key={stat.game.id}>
            <div className="flex pb-2">
              <div className="flex-auto text-center">{stat.game.status}</div>
              <div className="flex-auto text-center">
                {stat.game.date.slice(0, 10)}
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Points</div>
              <div className="flex-auto text-right">{stat.pts}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Rebounds</div>
              <div className="flex-auto text-right">{stat.reb}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Offensive Rebounds</div>
              <div className="flex-auto text-right">{stat.oreb}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Defensive Rebounds</div>
              <div className="flex-auto text-right">{stat.dreb}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Assists</div>
              <div className="flex-auto text-right">{stat.ast}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Steal</div>
              <div className="flex-auto text-right">{stat.stl}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Blocks</div>
              <div className="flex-auto text-right">{stat.blk}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Field Goals</div>
              <div className="flex-auto text-right">
                {stat.fgm}/{stat.fga}
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Field Goal %</div>
              <div className="flex-auto text-right">
                {(stat.fg_pct * 100).toFixed(2)}%
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">3 Pointers</div>
              <div className="flex-auto text-right">
                {stat.fg3m}/{stat.fg3a}
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">3 Point %</div>
              <div className="flex-auto text-right">
                {(stat.fg3_pct * 100).toFixed(2)}%
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Free Throws</div>
              <div className="flex-auto text-right">
                {stat.ftm}/{stat.fta}
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Free Throw %</div>
              <div className="flex-auto text-right">
                {(stat.ft_pct * 100).toFixed(2)}%
              </div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Minutes</div>
              <div className="flex-auto text-right">{stat.min}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Personal Fouls</div>
              <div className="flex-auto text-right">{stat.pf}</div>
            </div>
            <div className="flex py-1">
              <div className="flex-auto">Turnovers</div>
              <div className="flex-auto text-right">{stat.turnover}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PlayerPreviousGamesName;
