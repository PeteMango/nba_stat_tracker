import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function TeamPage () {
    return (
        <div>
            <div className="grid grid-cols-1 content-between py-10 px-20">
                <input className="border-cyan-500 border-2" type="text" placeholder="Search Team" />
            </div>
            <div className="grid content-center text-center hover:underline">
                <Link to="/teamprofile">
                    <h1>Enter</h1>
                </Link>
            </div>
            <div className="grid justify-center grid-cols-2 gap-4">
                <div className="grid justify-center border-red-500 border-2">Western Conference Standings</div>
                <div className="grid justify-center border-red-500 border-2">Easatern Conference Standings</div>
            </div>
        </div>
    );
}

export default TeamPage;