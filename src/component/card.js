import React from 'react';
function Card(props) {
    return (
        <div className='card'>
            <img src={props.Poster}></img>
            <h2>{props.Title}</h2>
            <h3>{props.Year}</h3>
        </div> 
    );
}

export default Card;