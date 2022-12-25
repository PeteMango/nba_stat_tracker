import logo from './logo.svg';
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
    <div className="grid grid-cols-2 content-between flex-auto">
      <div className="grid grid-cols-4 content-between">
        <div className="border-red-500 border-2 grid justify-items-center">
          <Link to="/">
            <h1>LOGO</h1>
          </Link>
        </div>
        <div className="border-red-500 border-2 grid justify-items-center">
          <Link to="/boxscores">
            <h1>Box Scores</h1>
          </Link>
        </div>
        <div className="border-red-500 border-2 grid justify-items-center">
          <Link to="/players">
            <h1>Player Info</h1>
          </Link>
        </div>
        <div className="border-red-500 border-2 grid justify-items-center">
          <Link to="/teams">
            <h1>Team Info</h1>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 content-between">
        <input className="border-red-500 border-2" type="text" placeholder="Search" />
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
      </Routes>
    </Router>
  );
}

export default App;
