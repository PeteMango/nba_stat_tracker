import { React, useState } from "react";
import PlayerInfo from "./PlayerInfo";
import TeamInfo from "./TeamInfo";

function Search() {
  const [playersShown, setPlayersShown] = useState("Players");
  const handleClick = (e) => {
    setPlayersShown(e.target.value);
  };

  return (
    <div className="mt-14">
      <nav className="flex items-stretch text-center p-2 m-2">
        <div className="flex-auto basis-1/2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <input
            className="sr-only peer "
            type="radio"
            name="answer"
            value="Players"
            id="answer_players"
            defaultChecked={playersShown === "Players"}
            onClick={handleClick}
          />
          <label
            htmlFor="answer_players"
            className="peer-checked:font-bold peer-checked:border-black peer-checked:border-2 py-2 px-14 rounded-full"
          >
            Players
          </label>
        </div>
        <div className="flex-auto basis-1/2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <input
            className="sr-only peer "
            type="radio"
            name="answer"
            value="Teams"
            id="answer_teams"
            defaultChecked={playersShown === "Teams"}
            onClick={handleClick}
          />
          <label
            htmlFor="answer_teams"
            className="peer-checked:font-bold peer-checked:border-black peer-checked:border-2 py-2 px-14 rounded-full"
          >
            Teams
          </label>
        </div>
      </nav>
      <div>{playersShown === "Players" && <PlayerInfo />}</div>
      <div>{playersShown === "Teams" && <TeamInfo />}</div>
    </div>
  );
}

export default Search;
