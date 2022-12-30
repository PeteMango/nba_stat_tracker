import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';


function App() {

  // const [stats, setStats] = useState(
  //   {
  //   assists: 0,
  //   blocks: 0,
  //   drebounds: 0,
  //   }
  // );

  const [stats, setStats] = useState([])

  useEffect(() => {
    axios.get('/api/player/profile/lebron_james').then(res => {
      setStats(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  // function getData() {
  //   axios({
  //     method: "GET",
  //     url: "/playerstats",
  //   })
  //   .then((response) => {
  //     const res = response.data
  //     setStats(({
  //       assists: res.ast,
  //       blocks: res.blk,
  //       drebounds: res.dreb
  //     }))     
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.log(error.response)
  //       console.log(error.response.status)
  //       console.log(error.response.headers)
  //     }
  //   })
  // }

  // useEffect( () => {
  //   fetch("/playerstats").then((res) =>
  //     res.json().then((data) => {
  //       setStats({
  //         assists: data.ast,
  //         blocks: data.blk,
  //         drebounds: data.dreb,
  //       });
  //     })
  //   );
  // }, []);

//   useEffect(() => {
//     fetch('/playerstats').then(response => {
//         if(response.ok) {
//             return response.json()
//         } throw response;
//     }).then(data => {
//       setAssists(data.ast)
//     }).catch(error => {
//       console.log(error)
//     })
// })

// useEffect(() => {
//   var responseClone;
//   fetch('http://localhost:5000/playerstats').then(response => {
//     responseClone = response.clone();
//     if (response.ok){
//       return response.json()
//     } throw response;
//   }).then(data => {
//     setAssists(data.ast)
//   }).catch(error => {
//     console.log(error)
//     console.log('response clone is: ', responseClone);
//     responseClone.text()
//     .then(bodyText => {
//       console.log('received the following instead of valid JSON: ', bodyText)
//     })
//   })
// })


  return (
    <div className="App">
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


/*
      ast: "",
      blk: "",
      dreb: "",
      fg3_pct: "",
      fg3a: "",
      fg3m: "",
      fg_pct: "",
      fga: "",
      fgm: "",
      ft_pct: "",
      fta: "",
      ftm: "",
      games_played: "",
      min: "",
      oreb: "",
      pf: "",
      player_id: "",
      pts: "",
      reb: "",
      season: "",
      stl: "",
      turnover: "",      
      */