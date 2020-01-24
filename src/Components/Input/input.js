import React from 'react';
import './input.css'

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


export const Input = ({
    type,
    onChange,
    inputStyle,
    inputSize,
    placeholder
}) => {

    const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

    const checkInputSize = SIZES.includes(inputSize) ? inputSize : SIZES[0];

    return (
        <input className = {`input input_${checkInputStyle} input_${checkInputSize}`} onChange = {onChange} type = {type} placeholder={placeholder}/>
        
    )
}