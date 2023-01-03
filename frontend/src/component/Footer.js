import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-screen fixed bottom-0 bg-opacity-100 bg-white dark:bg-[#1e293b] pb-4 justify-center">
      <ul className="flex flex-wrap items-center justify-center mt-3 text-sm text-black dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/boxscores/today" className="mr-4 hover:underline md:mr-6">
            Today
          </Link>
        </li>
        <li>
          <Link to="/search" className="mr-4 hover:underline md:mr-6">
            Search
          </Link>
        </li>
        <li>
          <Link to="/boxscores/date" className="mr-4 hover:underline md:mr-6">
            Boxscore
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
