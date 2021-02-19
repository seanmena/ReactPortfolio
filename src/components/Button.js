import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // if class not selected out goes to style 0 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link  
        to={{ pathname: "https://github.com/seanmena" }}
        target="_blank" className= 'btn-mobile'>
            <button
             className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick={onClick}
             type={type}
            >
                {children}
            </button>
        </Link>
    )
};

export const ButtonTwo = ({children, type, onClick, buttonStyle, buttonSize}) => {
    // if class not selected out goes to style 0 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link  
        to={{ pathname: "https://www.linkedin.com/in/sean-mena-2910651aa/" }}
        target="_blank" className= 'btn-mobile'>
            <button
             className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
             onClick={onClick}
             type={type}
            >
                {children}
            </button>
        </Link>
    )
};
