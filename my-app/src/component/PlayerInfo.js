import React from 'react'

function PlayerPage () {
    return (
        <div>
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