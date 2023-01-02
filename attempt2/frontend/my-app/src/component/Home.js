import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      THIS IS THE HOMEPAGE
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to="/player/info">
              Player Info (not done) petemango autofill combobox
            </Link>
          </li>
          <li>
            <Link to="/team/info">
              Team Info (kinda stupid cause who's looking this up?)
            </Link>
          </li>
          <li>
            <Link to="/player/averages">Player Averages</Link>
          </li>
          <li>
            <Link to="player/averages/year">Player Averages Search Year</Link>
          </li>
          <li>
            <Link to="/boxscores/today">Box Score Today</Link>
          </li>
          <li>
            <Link to="/boxscores/date">Box Score Search Date</Link>
          </li>
          <li>
            <Link to="/team/games">Team Games</Link>
          </li>
          <li>
            <Link to="/player/games">Player Games</Link>
          </li>
          <li>
            <Link to="/player/topperformers">Best Players from Games</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;
