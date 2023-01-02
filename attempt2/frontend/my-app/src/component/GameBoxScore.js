import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

function GameBoxScore() {
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

export default GameBoxScore;

// import React, {useState, useEffect} from 'react';
// import axios from "axios";

// function GameBoxScore() {
//   const [input, setInput] = useState('');
//   const [name, setName] = useState(input);
//   const [box, setBox] = useState([]);

//   const handleChange = (event) => {
//     setInput(event.target.value)
//   }

//   const handleClick = () => {
//     setName(input)
//   }

//   useEffect(() => {
//     // 857877
//     const theName = String(name)
//     const theUrl = '/api/team/boxscore/'.concat(theName)

//     axios.get(theUrl, {
//     }).then(res => {
//       setBox(res.data)
//     }).catch(err => {
//       console.log(err)
//     })
//   }, [name])

//   return (
//     <div>
//       <div>
//         <input type="text" onChange={handleChange} placeholder="Search for game id"></input>
//         <button onClick={handleClick}>Submit</button>
//       </div>
//       {
//         box.map(game => (
//           <div key={game.player.id}>
//             <h1>{game.player.first_name} {game.player.last_name}: {game.pts} PTS, {game.reb} REB, {game.ast} AST</h1>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default GameBoxScore;
