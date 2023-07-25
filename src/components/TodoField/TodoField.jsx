import React from "react";
import styles from './TodoField.module.css';

const TodoField = ({ children, onClick, id }) => {
    return (
        <>
            <div className={styles.container}>
                <p className={styles.title}>{children}</p>
                <button className={styles.delete_button} onClick={() => onClick(id)}>Delete</button>
            </div>
        </>
    );
};

export default TodoField;