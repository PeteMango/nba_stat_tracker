import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Home from './component/Home';
import PlayerInfo from './component/PlayerInfo';
import TeamInfo from './component/TeamInfo'; //this one isn't working yet
import PlayerAverages from './component/PlayerAverages';
import TodayBoxScores from './component/TodayBoxScores';
import PlayerLastGame from './component/PlayerLastGame';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/player/info' element={< PlayerInfo />}></Route>
          <Route exact path='/team/info' element={< TeamInfo />}></Route>
          <Route exact path='/player/averages' element={< PlayerAverages />}></Route>
          <Route exact path='/boxscores/today' element={< TodayBoxScores />}></Route>
          <Route exact path='/player/lastgame' element={< PlayerLastGame />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;