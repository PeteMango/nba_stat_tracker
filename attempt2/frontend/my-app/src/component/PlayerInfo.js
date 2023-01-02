import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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

  const isEmpty = str => !str.trim().length;

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
    if(isEmpty(value) || value.length < 3) {
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
              <li
                onClick={() => handleClick(suggestion)}
                key={suggestion}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleClick}>Submit</button>
      </div>
      {stats.map((stat) => (
        <div key={stat.id}>
          <h1>
            Name: {stat.first_name} {stat.last_name}
          </h1>
          <h1>
            Height: {stat.height_feet}'{stat.height_inches}
          </h1>
          <h1>Position: {stat.position}</h1>
          <h1>Weight: {stat.weight_pounds}</h1>
          <h1>Team: {stat.team.full_name}</h1>
        </div>
      ))}
    </div>
  );
}

export default PlayerInfo;
