import React, {useState, useEffect} from 'react';
import axios from "axios";

function PlayerAverages() {
  const [input, setInput] = useState('');
  const [name, setName] = useState(input);
  const [stats, setStats] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    setName(input)
  }

  useEffect(() => {
    const theName = name;
    const theUrl = '/api/player/stats/averages/'.concat(theName)

    axios.get(theUrl, {
    }).then(res => {
      setStats(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [name])


  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} placeholder="Search for Player's Season Averages"></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      {
        stats.map(stat => (
          <div key={stat.player_id}>
            <h1>Points: {stat.pts}</h1>
            <h1>Rebounds: {stat.reb} - {stat.oreb} Off., {stat.dreb} Def.</h1>
            <h1>Assists: {stat.ast}</h1>
            <h1>Steals: {stat.stl}</h1>
            <h1>Blocks: {stat.blk}</h1>
            <h1>Field Goals: {stat.fgm}/{stat.fga} - {stat.fg_pct}%</h1>
            <h1>3 Pointers: {stat.fg3m}/{stat.fg3a} - {stat.fg3_pct}%</h1>
            <h1>Free Throws: {stat.ftm}/{stat.fta} - {stat.ft_pct}%</h1>
            <h1>Games Played: {stat.games_played}</h1>
            <h1>Minutes: {stat.min}</h1>
            <h1>Personal Fouls: {stat.pf}</h1>
            <h1>Turnovers: {stat.turnover}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default PlayerAverages;