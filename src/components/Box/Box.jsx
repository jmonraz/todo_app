import React from "react";
import "./Box.css";

const Box = ({ children }) => {
    return (
        <div className="white-box">
            {children}
        </div>
    );
};

export default Box;