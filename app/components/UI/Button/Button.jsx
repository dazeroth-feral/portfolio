'use client';

import cssStyle from "./Button.module.css";

const Button = ({ children, callbackOnClick }) => {
    return (
        <div 
            className={cssStyle.content}
            onClick={callbackOnClick}>
            {children}
        </div>
    );
}

export default Button;