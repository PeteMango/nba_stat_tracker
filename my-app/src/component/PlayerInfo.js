import React, { useState, useEffect } from 'react'
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000/player/'
})

function PlayerPage () {
    state = {
        courses: []
    }

    // constructor() {
    //     super();
    //     api.get('/').then(res=> {
    //         console.log(res.data)
    //         this.setState({ courses : res.data})
    //     })
    // }

    /* player information */
    const [player_id, set_player_id] = useState(null)
    const [is_active, set_player_activity] = useState(null)

    const [full_name, set_player_full_name] = useState(null)
    const [first_name, set_player_first_name] = useState(null)
    const [last_name, set_player_last_name] = useState(null)        

    useEffect(() => {
        fetch('/player/').then(response => {
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
        </div>
        );
}


export default PlayerPage

// // {"data": [{"id":237,"first_name":"LeBron","height_feet":6,"height_inches":8,"last_name":"James","position":"F","team":{"id":14,"abbreviation":"LAL","city":"Los Angeles","conference":"West","division":"Pacific","full_name":"Los Angeles Lakers","name":"Lakers"},"weight_pounds":250}],"meta":{"total_pages":1,"current_page":1,"next_page":null,"per_page":25,"total_count":1}}
// /*
// data:
//     id:
//     first_name:
//     height_feet:
//     height_inches:
//     last_name:
//     position:
//     team:
//         id:
//         abbreviation:
//         city:
//         conference:
//         division:
//         full_name:
//         name:
// meta:
//     total_pages:
//     current_page:
//     next_page:
//     per_page:
//     total_count:
// */