import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Home() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWR ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "345459671257-qhof7ackf0ko9bll0oj6ih2l8p9a1s7d.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  // if theres a user, show sign out, else show sign in

  return (
    <main className="mt-10">
      {user && (
        <div>
          <img src={user.picture} className="rounded-full"></img>
          <h1 className="text-center">Welcome {user.name}</h1>
        </div>
      )}
      <div id="signInDiv" className="border-2 border-cyan-500"></div>
      {Object.keys(user).length != 0 && (
        <button
          onClick={(event) => handleSignOut(event)}
          className="border-2 border-red-500"
        >
          Sign Out
        </button>
      )}
    </main>
    // <main className="mt-10">
    //   THIS IS THE HOMEPAGE
    //   <nav>
    //     <ul style={{ listStyleType: "none" }}>
    //       <li>
    //         <Link to="/player/info">
    //           (Added) Player Info (not done) petemango autofill combobox
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/team/info">
    //           (Added) Team Info (kinda stupid cause who's looking this up?)
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/player/averages">(Added) Player Averages</Link>
    //       </li>
    //       <li>
    //         <Link to="player/averages/year">
    //           (Added) Player Averages Search Year
    //         </Link>
    //       </li>
    //       <li>
    //         <Link to="/boxscores/today">(Added) Box Score Today</Link>
    //       </li>
    //       <li>
    //         <Link to="/boxscores/date">(Added) Box Score Search Date</Link>
    //       </li>
    //       <li>
    //         <Link to="/team/games">(Added) Team Games</Link>
    //       </li>
    //       <li>
    //         <Link to="/player/games">(Added) Player Games</Link>
    //       </li>
    //       <li>
    //         <Link to="/player/topperformers">
    //           (Added) Best Players from Games
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </main>
  );
}

export default Home;
