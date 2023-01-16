// make 2 boxscores one with home team stats and another with away team stats

import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

function GameBoxScore() {
  const queryParameters = new URLSearchParams(window.location.search);
  const gameID = queryParameters.get("id");

  const [boxHome, setBoxHome] = useState([]);
  useEffect(() => {
    const theName = String(gameID);
    const theUrl = "/api/team/boxhome/".concat(theName);
    axios
      .get(theUrl, {})
      .then((res) => {
        setBoxHome(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gameID]);

  const [boxAway, setBoxAway] = useState([]);
  useEffect(() => {
    const theName = String(gameID);
    const theUrl = "/api/team/boxaway/".concat(theName);
    axios
      .get(theUrl, {})
      .then((res) => {
        setBoxAway(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gameID]);
  // className="border sticky top-7 bg-opacity-100 bg-white dark:bg-slate-800"


  return (
    <table className="mb-14 mt-10 z-0 table-auto text-center sticky top-7 bg-white dark:bg-slate-800">
      <thead>
        <tr className="z-10 border sticky top-10 bg-opacity-100 bg-white dark:bg-slate-800">
          <th className="border px-14 py-4">Players</th>
          <th className="border px-4 py-2">MIN</th>
          <th className="border px-4 py-2">PTS</th>
          <th className="border px-4 py-2">REB</th>
          <th className="border px-4 py-2">AST</th>
          <th className="border px-4 py-2">STL</th>
          <th className="border px-4 py-2">BLK</th>
          <th className="border px-4 py-2">TO</th>
          <th className="border px-4 py-2">PF</th>
          <th className="border px-4 py-2">FG</th>
          <th className="border px-4 py-2">3FG</th>
          <th className="border px-4 py-2">FT</th>
          <th className="border px-4 py-2">DREB</th>
          <th className="border px-4 py-2">OREB</th>
        </tr>
      </thead>
      <tbody>
        <tr className="z-20 border sticky top-10 bg-opacity-100 bg-white dark:bg-slate-800">
          <th className="px-14 py-4">Home</th>
          
        </tr>
        {boxHome.map((game) => (
          <tr key={game.player.id} className="text-slate-500">
            <td className="border p-3">
              {game.player.first_name} {game.player.last_name}
            </td>
            <td className="border">{game.min}</td>
            <td className="border">{game.pts}</td>
            <td className="border">{game.reb}</td>
            <td className="border">{game.ast}</td>
            <td className="border">{game.stl}</td>
            <td className="border">{game.blk}</td>
            <td className="border">{game.turnover}</td>
            <td className="border">{game.pf}</td>
            <td className="border">
              {game.fgm}/{game.fga}
            </td>
            <td className="border">
              {game.fg3m}/{game.fg3a}
            </td>
            <td className="border">
              {game.ftm}/{game.fta}
            </td>
            <td className="border">{game.dreb}</td>
            <td className="border">{game.oreb}</td>
          </tr>
        ))}

        <tr className="z-20 border sticky top-10 bg-opacity-100 bg-white dark:bg-slate-800">
          <th className="px-14 py-4">Away</th>
        </tr>
        {boxAway.map((game) => (
          <tr key={game.player.id} className="text-slate-500">
            <td className="border p-3">
              {game.player.first_name} {game.player.last_name}
            </td>
            <td className="border">{game.min}</td>
            <td className="border">{game.pts}</td>
            <td className="border">{game.reb}</td>
            <td className="border">{game.ast}</td>
            <td className="border">{game.stl}</td>
            <td className="border">{game.blk}</td>
            <td className="border">{game.turnover}</td>
            <td className="border">{game.pf}</td>
            <td className="border">
              {game.fgm}/{game.fga}
            </td>
            <td className="border">
              {game.fg3m}/{game.fg3a}
            </td>
            <td className="border">
              {game.ftm}/{game.fta}
            </td>
            <td className="border">{game.dreb}</td>
            <td className="border">{game.oreb}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
