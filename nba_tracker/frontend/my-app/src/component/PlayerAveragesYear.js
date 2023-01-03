import React, {useState, useEffect} from 'react';
import axios from "axios";

function PlayerAveragesYear() {
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [name, setName] = useState(input);
  const [date, setDate] = useState(input2);
  const [stats, setStats] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleChange2 = (event) => {
    setInput2(event.target.value)
  }

  const handleClick = () => {
    setName(input)
    setDate(input2)
  }

  useEffect(() => {
    const theName = name;
    const theYear = date;
    var theUrl = '/api/player/stats/averages/full/'.concat(theName)

    theUrl = theUrl.concat("/")
    theUrl = theUrl.concat(theYear)

    axios.get(theUrl, {
    }).then(res => {
      setStats(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [name, date])


  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} placeholder="Search for Player's Season Averages"></input>
      </div>
      <div>
        <input type="number" min="1947" max="2022" onChange={handleChange2} placeholder="Year"></input>
      </div>
      <div>
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

export default PlayerAveragesYear;