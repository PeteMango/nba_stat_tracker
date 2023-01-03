import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex fixed bottom-0 w-screen bg-blue-900 bg-opacity-100">
      <nav className="flex border-purple-500 m-2 space-x-2 w-full">
        <Link
          to="/boxscores/today"
          className="flex-auto basis-1/6 border-2 border-orange-500"
        >
          <h4>Today</h4>
        </Link>
        <Link
          to="/search"
          className="flex-auto basis-1/3 border-2 border-orange-500"
        >
          <h4>Search</h4>
        </Link>
        <Link
          to="/boxscores/date"
          className="flex-auto basis-1/3 border-2 border-orange-500"
        >
          <h4>Box</h4>
        </Link>
        <h4 className="flex-auto basis-1/6 border-2 border-orange-500">
          Login
        </h4>
      </nav>
    </div>
  );
}

export default Footer;
