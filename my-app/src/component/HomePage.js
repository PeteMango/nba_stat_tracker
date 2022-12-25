import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

function Home () {
    return (
        <div className="text-center">
            <div className="border-red-500 border-2">
                WELCOME TO THE NBA STAT TRACKER
            </div>
            <div>
                ft. Mango x Norm
            </div>
            <div className="border-red-500 border-2">
                <Link to="/boxscores">
                    Games Today
                </Link>
            </div>
        </div>
    );
}

export default Home;