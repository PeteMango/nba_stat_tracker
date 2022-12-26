import React, { useState, useEffect } from 'react'

function PlayerPage () {
    /* player information */
    const [player_id, set_player_id] = useState(null)
    const [is_active, set_player_activity] = useState(null)

    const [full_name, set_player_full_name] = useState(null)
    const [first_name, set_player_first_name] = useState(null)
    const [last_name, set_player_last_name] = useState(null)


    useEffect(() => {
        fetch('/player').then(response => {
            if(response.ok) {
                return response.json()
            } throw response;
        }).then(data => {set_player_id(data.id)})
    })

    useEffect(() => {
        fetch('/player').then(response => {
            if(response.ok) {
                return response.json()
            } throw response;
        }).then(data => {set_player_full_name(data.full_name)})
    })

    useEffect(() => {
        fetch('/player').then(response => {
            if(response.ok) {
                return response.json()
            } throw response;
        }).then(data => {set_player_first_name(data.first_name)})
    })

    useEffect(() => {
        fetch('/player').then(response => {
            if(response.ok) {
                return response.json()
            } throw response;
        }).then(data => {set_player_last_name(data.last_name)})
    })

    useEffect(() => {
        fetch('/player').then(response => {
            if(response.ok) {
                return response.json()
            } throw response;
        }).then(data => {set_player_activity(data.is_active === 'true'?"no":"yes")})
    })

    return (
        <div>
            <p>the name of the player is {full_name}</p>
            <p>the first name of the player is {first_name}</p>
            <p>the last name of the player is {last_name}</p>
            <p>the id of the player is {player_id}</p>
            <p>the player is active {is_active}</p>
            <div className="grid grid-cols-1 content-between py-10 px-20">
                <input className="border-cyan-500 border-2" type="text" placeholder="Search Player" />
            </div>
            <div className="grid justify-center grid-cols-6 gap-4">
                {/* <table>
                    <tr>
                        <th className="px-5 border-red-500 border-2">NxMs</th>
                        <th className="px-5 border-red-500 border-2">PPG Leaders</th>
                        <th className="px-5 border-red-500 border-2">APG Leaders</th>
                        <th className="px-5 border-red-500 border-2">RPG Leaders</th>
                        <th className="px-5 border-red-500 border-2">SPG Leaders</th>
                        <th className="px-5 border-red-500 border-2">BPG Leaders</th>
                    </tr>
                    <tr>
                        <td >Stephen Curry</td>
                        <td>Stephen Curry</td>
                        <td>Stephen Curry</td>
                        <td>Stephen Curry</td>
                        <td >Stephen Curry</td>
                        <td >Stephen Curry</td>
                    </tr>
                </table> */}
                <div className="grid justify-center border-red-500 border-2">NxMs</div>
                <div className="grid justify-center border-red-500 border-2">PPG Leaders</div>
                <div className="grid justify-center border-red-500 border-2">APG Leaders</div>
                <div className="grid justify-center border-red-500 border-2">RPG Leaders</div>
                <div className="grid justify-center border-red-500 border-2">SPG Leaders</div>
                <div className="grid justify-center border-red-500 border-2">BPG Leaders</div>

                <div className="grid justify-center border-cyan-500 border-2">1 Norman</div>
                <div className="grid justify-center border-cyan-500 border-2">2 Steph Curry</div>
                <div className="grid justify-center border-cyan-500 border-2">3 Norman</div>
                <div className="grid justify-center border-cyan-500 border-2">4 Steph Curry</div>
                <div className="grid justify-center border-cyan-500 border-2">5 Norman</div>
                <div className="grid justify-center border-cyan-500 border-2">6 Steph Curry</div>

                <div className="grid justify-center border-cyan-500 border-2">7 Norman</div>
                <div className="grid justify-center border-cyan-500 border-2">8 Steph Curry</div>
                <div className="grid justify-center border-cyan-500 border-2">9 Norman</div>
                <div className="grid justify-center border-cyan-500 border-2">10 Steph Curry</div>
                <div className="grid justify-center border-cyan-500 border-2">11 Norman</div>
                <div className="grid justify-center border-cyan-500 border-2">12 Steph Curry</div>
            </div>
        </div>
    );
}

export default PlayerPage;