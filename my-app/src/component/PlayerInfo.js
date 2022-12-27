// <<<<<<< HEAD
// import React, { Component } from 'react'
// import axios from 'axios';
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';



// export class PlayerPage extends Component () {
//     constructor(props) {
//         super(props);
//         this.state = {
//             playerName: null,
//             playerStats: {}
//         };
//     }

//     handleChange = (event) => {
//         const replace = event.target.value.split(" ").join("_");
//         if (replace.length > 0){
//             this.setState({ playerName: replace});
//         }
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.getPlayerId();
//     };
//     getPlayerId = () => {
//         axios.get("https://www.balldontlie.io/api/v1/players?search=${this.state.playerName").then(async (res) => {
//             await this.getPlayerStats(res.data.data[0].id)
//         }).catch((err) => {
//             console.log(err);
//         })
//     }
//     getPlayerStats = (playerId) => {
//         axios.get("https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}").then(async (res) => {
//             console.log(res.data.data);
//             this.setState({ playerStats: res.data.data[0]});
//         })
//         .catch((err) => {
//             console.log(err);
//         })
//     }

//     render() {
//         return (
//             <div className="PlayerPage">
//                 <div className="grid grid-cols-1 content-between py-10 px-20">
//                     <form >
//                     {/* onSubmit={this.handleSubmit} */}
//                         <input className="border-neutral-500 border-2 m-4 py-4 rounded-full h-3 px-3" type="text" placeholder="Search Player" /> 
//                         {/* value={this.state.value} onChange={this.handleChange} */}
//                         <input type="submit" value="submit" />
//                     </form>
//                 </div>
//                 {/* <div className="grid content-center text-center hover:underline">
//                     <Link to="/playerprofile">
//                         <h1>Enter</h1>
//                     </Link>
//                 </div> */}
//                 <div className="grid justify-center grid-cols-6 gap-4 border-red-900 border-2 my-5 text-center">
//                     {/* <div>team: {this.state.playerState["team"]};</div>
//                     <div>games played: {this.state.playerState["games_played"]};</div>
//                     <div>ppg: {this.state.playerState["pts"]};</div>
//                     <div>apg: {this.state.playerState["ast"]};</div>
//                     <div>rpg: {this.state.playerState["reb"]};</div>
//                     <div>fg%: {this.state.playerState["fg_pct"]};</div> */}
//                     <div>test</div>
//                 </div>
//                 <div className="grid justify-center grid-cols-6 gap-4">
//                     <div className="grid justify-center border-red-500 border-2">NxMs</div>
//                     <div className="grid justify-center border-red-500 border-2">PPG Leaders</div>
//                     <div className="grid justify-center border-red-500 border-2">APG Leaders</div>
//                     <div className="grid justify-center border-red-500 border-2">RPG Leaders</div>
//                     <div className="grid justify-center border-red-500 border-2">SPG Leaders</div>
//                     <div className="grid justify-center border-red-500 border-2">BPG Leaders</div>
//                 </div>
// =======
// import React, { useState, useEffect } from 'react'

// function PlayerPage () {
//     /* player information */
//     const [player_id, set_player_id] = useState(null)
//     const [is_active, set_player_activity] = useState(null)

//     const [full_name, set_player_full_name] = useState(null)
//     const [first_name, set_player_first_name] = useState(null)
//     const [last_name, set_player_last_name] = useState(null)


//     useEffect(() => {
//         fetch('/player').then(response => {
//             if(response.ok) {
//                 return response.json()
//             } throw response;
//         }).then(data => {set_player_id(data.id)})
//     })

//     useEffect(() => {
//         fetch('/player').then(response => {
//             if(response.ok) {
//                 return response.json()
//             } throw response;
//         }).then(data => {set_player_full_name(data.full_name)})
//     })

//     useEffect(() => {
//         fetch('/player').then(response => {
//             if(response.ok) {
//                 return response.json()
//             } throw response;
//         }).then(data => {set_player_first_name(data.first_name)})
//     })

//     useEffect(() => {
//         fetch('/player').then(response => {
//             if(response.ok) {
//                 return response.json()
//             } throw response;
//         }).then(data => {set_player_last_name(data.last_name)})
//     })

//     useEffect(() => {
//         fetch('/player').then(response => {
//             if(response.ok) {
//                 return response.json()
//             } throw response;
//         }).then(data => {set_player_activity(data.is_active === 'true'?"no":"yes")})
//     })

//     return (
//         <div>
//             <p>the name of the player is {full_name}</p>
//             <p>the first name of the player is {first_name}</p>
//             <p>the last name of the player is {last_name}</p>
//             <p>the id of the player is {player_id}</p>
//             <p>the player is active {is_active}</p>
//             <div className="grid grid-cols-1 content-between py-10 px-20">
//                 <input className="border-cyan-500 border-2" type="text" placeholder="Search Player" />
// >>>>>>> 8a9e7bd78d9a08dcac7e0dd3a934b732ec1a9c83
//             </div>
//         );
//     }
// }

// export default PlayerPage

// // {"data": [{"id":237,"first_name":"LeBron","height_feet":6,"height_inches":8,"last_name":"James","position":"F","team":{"id":14,"abbreviation":"LAL","city":"Los Angeles","conference":"West","division":"Pacific","full_name":"Los Angeles Lakers","name":"Lakers"},"weight_pounds":250}],"meta":{"total_pages":1,"current_page":1,"next_page":null,"per_page":25,"total_count":1}}
// /*
// data:
//     id:
//     first_name:
//     height_feet:
//     height_inches:
//     last_name:
//     position:
//     team:
//         id:
//         abbreviation:
//         city:
//         conference:
//         division:
//         full_name:
//         name:
// meta:
//     total_pages:
//     current_page:
//     next_page:
//     per_page:
//     total_count:
// */