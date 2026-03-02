import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const Available = ({playersPromise,setAvailableBalance, availableBalance, setSelectedPlayer, selectedPlayer}) => {
    const playersData  = use(playersPromise)
    // console.log(playersData);
    
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
            {
                playersData.map((player,indx) => <PlayerCard key={indx} selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }
        </div>
    );
};

export default Available;