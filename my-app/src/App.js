import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


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
    <div className="grid grid-cols-2 content-between">
      <div className="grid grid-cols-4 content-between">
        <div><h1>LOGO</h1></div>
        <div><h1>Box Scores</h1></div>
        <div><h1>Player Info</h1></div>
        <div><h1>Team Info</h1></div>
      </div>
      <div className="grid grid-cols-1 content-between">
        <div><h1>Search Bar</h1></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <div>
        <SearchBar/>
      </div>
    </Router>
  );
}

export default App;
