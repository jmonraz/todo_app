import React from "react";
import styles from './TodoField.module.css';

const TodoField = ({ children }) => {
    return (
        <>
            <div className={styles.box_container}>
                <div className={styles.container}>
                    <p className={styles.title}>{children}</p>
                    <button className={styles.delete_button}>Delete</button>
                </div>
            </div>

        </>
    );
};

export default TodoField;