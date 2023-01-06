import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TeamInfo() {
  const [input, setInput] = useState("");
  const [name, setName] = useState(input);
  const [stats, setStats] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setName(input);
  };

  useEffect(() => {
    const theName = name;
    const theUrl = "/api/team/".concat(theName);
    console.log(theUrl);

    axios
      .get(theUrl, {})
      .then((res) => {
        setStats(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <div>
      <div>
        <div className="border-2 border-red-500 flex justify-center pt-8 pb-4 px-16">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search for Team Name"
            className="rounded-full flex-auto py-2 px-4 text-black"
          ></input>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="border-2 border-purple-500 flex-auto mx-16 rounded-full mb-2"
          >
            Submit
          </button>
        </div>
      </div>
      {stats.map((stat) => (
        <div className="flex border-2 border-lime-500 m-4 p-4 text-center">
          <Link
            to={`/team/games/name?name=${stat.name}`}
            key={stat.id}
            className="flex-auto"
          >
            <h1>{stat.full_name}</h1>
            <h1>{stat.conference}ern Conference</h1>
            <h1>{stat.division} Division</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TeamInfo;
