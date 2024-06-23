import React from 'react';
import './Card.css';

export default function Card () {
    return(
        <div className='card'>
            <img src="./images/katie-zaferes.png" className='card--image'/>
            <div className='card--stats'>
                <img src="./images/star.png" className='card--star'/>
                <span className='gray'>5.0</span>
                <span className='gray'>(6) ·</span>        {/* middle dor with opt+shift+9 */}
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className='bold'>From $136</span> / person</p>
        </div>
    )
}