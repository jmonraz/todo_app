import React from "react";

const Button = ({ children, onClick, theme }) => {
    return (
        <div>
            <button onClick={onClick} className={theme}>{children}</button>
        </div>
    );
};

export default Button;