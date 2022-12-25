import React from 'react'

function TeamPage () {
    return (
        <div>
            <div className="grid grid-cols-1 content-between py-10 px-20">
                <input className="border-cyan-500 border-2" type="text" placeholder="Search Team" />
            </div>
            <div className="grid justify-center grid-cols-2 gap-4">
                <div className="grid justify-center border-red-500 border-2">Western Conference Standings</div>
                <div className="grid justify-center border-red-500 border-2">Easatern Conference Standings</div>
            </div>
        </div>
    );
}

export default TeamPage;