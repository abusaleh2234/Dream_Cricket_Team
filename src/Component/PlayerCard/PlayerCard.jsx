import React from 'react';
import user from "../../assets/user-1.png"
import flag from "../../assets/report-1.png"
const PlayerCard = ({ player }) => {
    console.log(player);

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className='p-5'>
                    <img className='w-full h-75 object-cover'
                        src={player.player_image}
                        alt="player image" />
                </figure>
                <div className="card-body">
                    <div className="">
                        <h2 className="card-title"> <span><img className='w-5' src={user} alt="" /></span>{player.player_name}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <img className='w-4' src={flag} alt="flag" />
                            <span>{player.player_country}</span>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                    </div>
                    <div className="divider m-0 p-0"></div>
                    <p className='font-bold'>Rating</p>
                    <div className="">
                        <div className="flex justify-between">
                            <p className='font-bold'>{player.bating_style}</p>
                            <span>{player.bating_style}</span>
                            
                        </div>
                        <div className="flex justify-between items-center"> 
                            <p className='font-bold'>{player.price}</p>
                            <button className='btn'>Choose Player</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;