import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';


function App() {

  const [input, setInput] = useState('');
  const [name, setName] = useState(input);
  const [stats, setStats] = useState([])

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    setName(input)
  }

  useEffect(() => {
    const theName = name;
    const theUrl = '/api/player/profile/'.concat(theName)
    console.log(theUrl)

    axios.get(theUrl, {
    }).then(res => {
      setStats(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [name])

  // useEffect(() =>{
  //   fetch('/api/player/profile/lebron_james').then(
  //     res => res.json()
  //   ).then(
  //     (data) => {
  //       setStats(data)
  //     }).catch((error) => {
  //     console.log(error);
  //   })
  // });


  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleChange} placeholder="Search for Player"></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      {
        stats.map(stat => (
          <div key={stat.first_name}>
            <h1>Name: {stat.first_name} {stat.last_name}</h1>
            <h1>Height: {stat.height_feet}'{stat.height_inches}</h1>
            <h1>Position: {stat.position}</h1>
            <h1>Weight: {stat.weight_pounds}</h1>
            <h1>Team: {stat.team.full_name}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default App;