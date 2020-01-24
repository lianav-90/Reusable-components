import React from 'react';
import './card.css'

const STYLES = [
    'YELLOW',
    'BLUE',
    'RED',
    'GREEN',
    'GREY'
];

const SIZES = [
    'SMALL',
    'MEDIUM',
    'LARGE'
];


export const Card = ({
    cardStyle,
    cardSize,
    children
}) => {

    const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

    const checkCardSize = SIZES.includes(cardSize) ? cardSize : SIZES[0];

    return (
        <div className = {`card card_${checkCardStyle} card_${checkCardSize}`}>
           {children}
        </div>  
    )
}