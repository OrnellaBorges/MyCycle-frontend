import React from "react";

/* type ButtonProps = {
    text: string;
    buttonType: string;
    displayText: () => void;
} */
// const Button = ({ text, buttonType, displayText, ...props }: ButtonProps) => {

const Button = ({ text, buttonType, displayText, ...props }) => {
    return (
        <button onClick={displayText} type={buttonType} {...props}>
            {text}
        </button>
    );
};

export default Button;
