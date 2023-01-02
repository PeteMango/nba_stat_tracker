import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import PlayerInfo from "./component/PlayerInfo";
import TeamInfo from "./component/TeamInfo"; //this one isn't working yet
import PlayerAverages from "./component/PlayerAverages";
import TodayBoxScores from "./component/TodayBoxScores";
import PlayerLastGame from "./component/PlayerLastGame";
import GameBoxScore from "./component/GameBoxScore";
import TeamLastXGames from "./component/TeamLastXGames";
import TopPerformers from "./component/TopPerformers";
import PlayerPreviousGames from "./component/PlayerPreviousGames";
import BoxScoresDate from "./component/BoxScoresDate";
import PlayerAveragesYear from "./component/PlayerAveragesYear";
import DropdownTest from "./component/DropdownTest";
// import TeamLastXGamesBoxscore from "./component/TeamLastXGamesBoxscore";

function App() {
  return (
    <div className="App">
      <Router>
        {/* prettier-ignore */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/player/info" element={<PlayerInfo />}></Route>
          <Route exact path="/team/info" element={<TeamInfo />}></Route>
          <Route exact path="/player/averages" element={<PlayerAverages />}></Route>
          <Route exact path="/boxscores/today" element={<TodayBoxScores />}></Route>
          <Route exact path="/player/lastgame" element={<PlayerLastGame />}></Route>
          {/* <Route exact path="/boxscores/game" element={<GameBoxScore />}></Route> // this is a bit redundant and may need some reconfiguring */}
          <Route exact path="/team/lastgames" element={<TeamLastXGames />}></Route> // figure out how to get rid of extra things on date section
          <Route exact path="/player/topperformers" element={<TopPerformers />}></Route>
          <Route exact path="/player/games" element={<PlayerPreviousGames />}></Route>
          <Route exact path="/boxscores/date" element={<BoxScoresDate />}></Route>
          <Route exact path="/player/averages/year" element={<PlayerAveragesYear />}></Route>
          <Route exact path="/dropdown" element={<DropdownTest />}></Route>
          <Route exact path="/boxscores/game" element={ <GameBoxScore /> }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
