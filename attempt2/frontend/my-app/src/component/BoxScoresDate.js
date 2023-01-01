import React, {useState, useEffect} from 'react';
import axios from "axios";

function BoxScoresDate() {
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
    const theUrl = '/api/boxscore/'.concat(theName)

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
        <input type="date" onChange={handleChange} placeholder="Search for Date"></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      {
        stats.map(stat => (
          <div key={stat.id}>
            <h1>_______________________________________</h1>
            <h1>Status: {stat.status}</h1>
            <h1>Home: {stat.home_team.full_name} - {stat.home_team_score}</h1>
            <h1>Away: {stat.visitor_team.full_name} - {stat.visitor_team_score}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default BoxScoresDate;