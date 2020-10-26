import React from 'react';

const Card = (props) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${props.details.id}?200x200`} />
            <div>
                <h2>{props.details.name}</h2>
                <p>{props.details.email}</p>
            </div>
        </div>
    );
}

export default Card;