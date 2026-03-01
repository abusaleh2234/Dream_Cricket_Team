import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Available = ({playersPromise,setAvailableBalance, availableBalance}) => {
    const playersData  = use(playersPromise)
    console.log(playersData);
    
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
            {
                playersData.map(player => <PlayerCard availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }
        </div>
    );
};

export default Available;