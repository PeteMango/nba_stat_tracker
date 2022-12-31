import React, {useState, useEffect} from 'react';
import axios from "axios";

function TeamInfo() {
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
    const theUrl = '/api/team/'.concat(theName)
    console.log(theUrl)

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
        <input type="text" onChange={handleChange} placeholder="Search for Team Name"></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      {
        stats.map(stat => (
          <div key={stat.id}>
            <h1>Name: {stat.full_name}</h1>
            <h1>Conference: {stat.conference}</h1>
            <h1>Division: {stat.division}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default TeamInfo;