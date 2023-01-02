import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function TeamLastXGamesBoxscore() {
  const queryParameters = new URLSearchParams(window.location.search);
  const gameID = queryParameters.get("id");
  //   const { game } = useParams();
  //   const [gameID, setGameID] = useState(0);

  const [box, setBox] = useState([]);

  //   useEffect(() => {
  //     getGameID(game).then(setGameID);
  //   }, [game]);

  useEffect(() => {
    // 857877
    const theName = String(gameID);
    const theUrl = "/api/team/boxscore/".concat(theName);

    axios
      .get(theUrl, {})
      .then((res) => {
        setBox(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gameID]);

  return (
    <div>
      {box.map((game) => (
        <div key={game.player.id}>
          <h1>
            {game.player.first_name} {game.player.last_name}: {game.pts} PTS,{" "}
            {game.reb} REB, {game.ast} AST
          </h1>
        </div>
      ))}
    </div>
  );
}

export default TeamLastXGamesBoxscore;
