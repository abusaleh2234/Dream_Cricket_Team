import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Available = ({playersPromise}) => {
    const playersData  = use(playersPromise)
    console.log(playersData);
    
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
            {
                playersData.map(player => <PlayerCard player={player}></PlayerCard>)
            }
        </div>
    );
};

export default Available;