import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-screen fixed bottom-0 bg-opacity-100 bg-white dark:bg-[#1e293b] pb-4 justify-center">
      <ul className="flex flex-wrap items-center justify-center mt-3 text-sm text-black dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/boxscores/today" className="mr-4 hover:underline md:mr-6">
            Today
          </a>
        </li>
        <li>
          <a href="/search" className="mr-4 hover:underline md:mr-6">
            Search
          </a>
        </li>
        <li>
          <a href="/boxscores/date" className="mr-4 hover:underline md:mr-6">
            Boxscore
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Login
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
