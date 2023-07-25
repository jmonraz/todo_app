import React from "react";
import "./InputField.css";

const InputField = ({ type = "text", hidden = false, placeholder, value, onChange }) => {
    return (
        <>
            <input type={type} hidden={hidden} placeholder={placeholder} value={value} onChange={onChange} className="input-field" />
        </>
    );
};

export default InputField;