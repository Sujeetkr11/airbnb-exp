import React from 'react';
import './Card.css';

export default function Card (props) {

    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    console.log(props)
    return(
        <div className='card'>
           {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`./images/${props.item.coverImg}`} className='card--image'/>
            <div className='card--stats'>
                <img src="./images/star.png" className='card--star'/>
                <span className='gray'>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) ·</span>        {/* middle dor with opt+shift+9 */}
                <span className='gray'>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>
        </div>
    )
}