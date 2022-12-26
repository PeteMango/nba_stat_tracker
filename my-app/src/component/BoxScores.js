import React from 'react'

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function Game () {
    return (
        <div className="border-cyan-500 border-2 py-5 px-10 my-5 mx-10">
            <Link to="/gamedetails">
                GAME    
            </Link>    
        </div>
    );
}

function BoxScores () {
    return (
        <div className="border-orange-500 border-2">
            <div className="grid justify-center grid-flow-row auto-rows-max grid-flow-col auto-cols-max">
                <Game />
                <Game />
                <Game />
            </div>
            <div className="grid justify-center grid-flow-row auto-rows-max grid-flow-col auto-cols-max">
                <Game />
                <Game />
                <Game />
            </div>
            <div className="grid justify-center grid-flow-row auto-rows-max grid-flow-col auto-cols-max">
                <Game />
                <Game />
                <Game />
            </div>
            <div className="grid justify-center grid-flow-row auto-rows-max grid-flow-col auto-cols-max">
                <Game />
                <Game />
                <Game />
            </div>
            <div className="grid justify-center grid-flow-row auto-rows-max grid-flow-col auto-cols-max">
                <Game />
                <Game />
                <Game />
            </div>
        </div>
    );
}

export default BoxScores;