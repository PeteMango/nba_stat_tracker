import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="flex w-screen fixed bottom-0 bg-opacity-100 pb-4 justify-center">
      <ul class="flex flex-wrap items-center mt-3 text-sm text-black dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/boxscores/today" class="mr-4 hover:underline md:mr-6 ">
            Today
          </a>
        </li>
        <li>
          <a href="/search" class="mr-4 hover:underline md:mr-6">
            Search
          </a>
        </li>
        <li>
          <a href="/boxscores/date" class="mr-4 hover:underline md:mr-6">
            Boxscore
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Login
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
