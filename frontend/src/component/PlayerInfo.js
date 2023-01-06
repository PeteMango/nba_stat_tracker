import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PlayerInfo() {
  const [input, setInput] = useState("");
  const [name, setName] = useState(input);
  const [stats, setStats] = useState([]);

  const [value, setValue] = useState(".");
  const [firstChar, setFirstChar] = useState("~");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [options, setOptions] = useState([]);
  const suggestions = options.filter((option) =>
    option.toLowerCase().startsWith(value.toLowerCase())
  );

  const autocompleteRef = useRef();

  useEffect(() => {
    const theName = name;
    const theUrl = "/api/player/profile/".concat(theName);

    axios
      .get(theUrl, {})
      .then((res) => {
        setStats(res.data);
        console.log(stats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const isEmpty = (str) => !str.trim().length;

  useEffect(() => {
    const starting_character = firstChar;
    if (starting_character == "~" || value.length <= 1) {
      setShowSuggestions(false);
      return;
    }
    const suggested_url = "/api/player/dictionary/active/".concat(firstChar);
    axios
      .get(suggested_url, {})
      .then((ret) => {
        console.log(firstChar);
        console.log(ret.data);
        var empty = [];
        for (let i = 0; i < ret.data.length; i++) {
          let obj = ret.data[i];
          empty.push(obj.full_name);
          console.log(obj.full_name);
        }
        setOptions(empty);
        console.log("options are: " + options);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [firstChar]);

  const handleChange = (event) => {
    setInput(event.target.value);
    setValue(event.target.value);
    if (isEmpty(value) || value.length < 3) {
      setFirstChar("~");
      setShowSuggestions(false);
    }
    if (value.length >= 3) {
      setFirstChar(value[0].toUpperCase());
      setShowSuggestions(true);
    }
    console.log(event.target.value);
  };
  const handleClick = (suggestion) => {
    setName(input);
    setValue(suggestion);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={value}
          onChange={handleChange}
          placeholder="search for a player"
          // onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && (
          <ul className="suggestions">
            {suggestions.map((suggestion) => (
              <li onClick={() => handleClick(suggestion)} key={suggestion}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleClick}>Submit</button>
      </div>
      <div className="border-2 border-purple-500 text-center m-2 p-4">
        {stats.map((stat) => (
          <Link to={`/player/games/name?name=${name}`} key={stat.id}>
            {/* change the above from name to the autocompleted name? */}
            <div className="p-2">
              {stat.first_name} {stat.last_name}
            </div>
            <div className="flex p-2">
              <div className="flex-auto">
                {stat.height_feet}'{stat.height_inches} {stat.position},{" "}
                {stat.weight_pounds} lbs
              </div>
              <div className="flex-auto">{stat.team.full_name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PlayerInfo;
