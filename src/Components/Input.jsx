import React from "react";

const Input = ({ labelName, inputType }) => {
    return (
        <>
            <label className="inputContainer">
                {labelName}
                <input className="inputField" type={inputType}></input>
            </label>
        </>
    );
};

export default Input;
