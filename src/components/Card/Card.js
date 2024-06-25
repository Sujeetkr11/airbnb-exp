import React from 'react';
import './Card.css';

export default function Card (props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

   //removed all item references
    return(
        <div className='card'>
           {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} className='card--image'/>
            <div className='card--stats'>
                <img src="./images/star.png" className='card--star'/>
                <span className='gray'>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) ·</span>        {/* middle dor with opt+shift+9 */}
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}