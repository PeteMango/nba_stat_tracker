import { useState, useEffect, useRef } from "react";
import axios from "axios";

const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [firstChar, setFirstChar] = useState("A");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [options, setOptions] = useState([]);
  const suggestions = options.filter((option) =>
    option.toLowerCase().startsWith(value.toLowerCase())
  );

  const autocompleteRef = useRef();

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

  useEffect(() => {
    const starting_character = firstChar;
    const suggested_url = "/api/player/dictionary/active/".concat(firstChar);
    axios
      .get(suggested_url, {})
      .then((ret) => {
        console.log(firstChar);
        console.log(ret.data);
        var empty = []
        for(let i = 0; i < ret.data.length; i++) {
          let obj = ret.data[i];
          empty.push(obj.full_name);
          console.log(obj.full_name);
        }
        setOptions(empty)
        console.log("options are: " + options)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [firstChar]);

  const handleSuggestionClick = (suggetion) => {
    setValue(suggetion);
    setShowSuggestions(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    if (value.length >= 1) {
      setFirstChar(value[0].toUpperCase());
    }
  };

  return (
    <div className="container">
      <div className="autocomplete" ref={autocompleteRef}>
        <input
          value={value}
          onChange={handleChange}
          placeholder="Search"
          onFocus={() => setShowSuggestions(true)}
        />
        {showSuggestions && (
          <ul className="suggestions">
            {suggestions.map((suggestion) => (
              <li
                onClick={() => handleSuggestionClick(suggestion)}
                key={suggestion}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
