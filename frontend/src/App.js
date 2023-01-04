import { React, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Header from "./component/Header";
import Footer from "./component/Footer";
import Search from "./component/Search";
import TopPerformersDate from "./component/TopPerformersDate";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div
      className={`overflow-auto overscroll-none h-screen w-screen ${
        darkMode ? "dark" : ""
      } border-2 border-red-800`}
    >
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* prettier-ignore */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/player/info" element={<PlayerInfo />}></Route>
          <Route exact path="/team/info" element={<TeamInfo />}></Route>
          <Route exact path="/player/averages" element={<PlayerAverages />}></Route>
          <Route exact path="/player/averages/year" element={<PlayerAveragesYear />}></Route> {/* maybe incorporate /player/averages into this one where the default search is for 2022 */}
          <Route exact path="/boxscores/today" element={<TodayBoxScores />}></Route>
          <Route exact path="/boxscores/date" element={<BoxScoresDate />}></Route>
          <Route exact path="/team/games" element={<TeamLastXGames />}></Route> {/* figure out how to get rid of extra things on date section*/}
          <Route exact path="/player/games" element={<PlayerPreviousGames />}></Route>
          <Route exact path="/player/topperformers" element={<TopPerformers />}></Route> {/* add link to game boxscore */}

          <Route exact path="/search" element={<Search />}></Route>

          <Route exact path="/player/lastgame" element={<PlayerLastGame />}></Route> {/* kinda stupid */}
          <Route exact path="/dropdown" element={<DropdownTest />}></Route>


          <Route exact path="/topperformers/date" element={<TopPerformersDate/>}></Route>
          <Route exact path="/boxscores/game" element={ <GameBoxScore /> }></Route> {/* not meant to be searched up */}
        </Routes>
        <div className="container h-3">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
