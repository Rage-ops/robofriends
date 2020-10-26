import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return (<Card 
                key={ i } 
                details={user}
                />);
    })
    return (
        <div>
            { cardsArray }
        </div> 
    );
}

export default Cardlist;