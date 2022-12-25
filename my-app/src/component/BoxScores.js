import React from 'react'

function Game () {
    return (
        <div className="border-cyan-500 border-2 py-3 px-5">GAME</div>
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