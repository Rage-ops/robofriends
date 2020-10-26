import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '2px solid black', height: '800px'}}>
            {/* We can add inline css in react using { {css} } 
            where the outer brackets denotes it is a javascript expression 
            and inner brackets denotes it's an object */}
            {props.children}
        </div>
    )
}
export default Scroll;