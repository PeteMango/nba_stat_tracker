import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Home from './component/HomePage';
import BoxScores from './component/BoxScores'
import PlayerPage from './component/PlayerInfo'
import TeamPage from './component/TeamInfo'
import GameDetails from './component/GameDetail'
// import PlayerProfile from './component/PlayerProfile'
import TeamProfile from './component/TeamProfile'


function SearchBar() {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleClick = () => {
    setUpdated(message);
  };

  return (
    <div className="content-center border-purple-800 border-2">
      <div className="p-4 border-emerald-800 border-2 flex justify-center"><input className="p-1 border-emerald-800 border-2" type="text" placeholder="enter nba team" id="team" value={message} onChange={handleChange}/></div>
      <div className="p-2"></div>
      <div className="p-4 border-red-800 border-2 flex justify-center"><button className="p-1 border-red-800 border-2"onClick={handleClick}>Enter</button></div>
      <div className="p-2"></div>
      <div className="p-4 border-neutral-800 border-2 flex justify-center"><h2>team: {updated}</h2></div>
      <div className="p-2"></div>
    </div>
  );
}

function Nav() {

  return (
    <div className="grid grid-cols-2 content-between flex-auto font-black font-mono subpixel-antialiased tracking-tight">
      <div className="border-b-neutral-500 border-2 grid grid-cols-4 content-center py-2">
        <div className="grid justify-items-center">
          <Link to="/">
            <img src={logo} alt="LOGO" className="h-12"/>
          </Link>
        </div>
        <div className="grid content-center text-center hover:underline">
          <Link to="/boxscores">
            <h1>Box Scores</h1>
          </Link>
        </div>
        <div className="grid content-center text-center hover:underline">
          <Link to="/players">
            <h1>Player Info</h1>
          </Link>
        </div>
        <div className="grid content-center text-center hover:underline">
          <Link to="/teams">
            <h1>Team Info</h1>
          </Link>
        </div>
      </div>
      <div className="border-b-neutral-500 border-2 grid grid-cols-1 content-center">
        <input className="border-neutral-500 border-2 m-4 py-4 rounded-full h-3 px-3" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div >
        <Nav />
      </div>
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/boxscores' element={< BoxScores />}></Route>
        <Route exact path='/players' element={< PlayerPage />}></Route>
        <Route exact path='/teams' element={< TeamPage />}></Route>
        <Route exact path='/gamedetails' element={< GameDetails />}></Route>
        {/* <Route exact path='/playerprofile' element={< PlayerProfile />}></Route> */}
        <Route exact path='/teamprofile' element={< TeamProfile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
