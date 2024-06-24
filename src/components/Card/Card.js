import React from 'react';
import './Card.css';

export default function Card (props) {
    console.log(props)
    return(
        <div className='card'>
            {/* In JSX, you should use curly braces directly around the expression outside of the string. */}
            <img src={`./images/${props.img}`} className='card--image'/>
            <div className='card--stats'>
                <img src="./images/star.png" className='card--star'/>
                <span className='gray'>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) ·</span>        {/* middle dor with opt+shift+9 */}
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}