import React from 'react';
import './Card.css';

export default function Card (props) {

    let badgeText
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === "Online") {
        badgeText = "ONLINE"
    }

    console.log(props)
    return(
        <div className='card'>
           {/* {props.openSpots === 0 &&<div className='card--badge'>SOLD OUT</div>} conditional rendering using ternary operator */}
           {badgeText && <div className='card--badge'>{badgeText}</div>}
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