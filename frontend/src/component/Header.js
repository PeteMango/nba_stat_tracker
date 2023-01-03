import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="">
      <nav className="flex border-2 border-purple-500 m-2 space-x-2 dark:bg-blue-900">
        <Link to="/" className="flex-auto basis-1/2 border-2 border-orange-500">
          <h4>Mango x Norm</h4>
        </Link>
        <h4 className="flex-auto basis-2/6 border-2 border-orange-500">
          blank
        </h4>
        <input
          className="flex-auto basis-1/6 border-2 border-orange-500"
          type="button"
          value="Dark"
          onClick={props.toggleDarkMode}
        />
      </nav>
    </div>
  );
}

export default Header;
