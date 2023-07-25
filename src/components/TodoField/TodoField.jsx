import React, { useState } from "react";
import styles from './TodoField.module.css';

const TodoField = ({ children, onClick, id, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(children);

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onUpdate(id, newTask);
        setIsEditing(false);
    };

    const handleChange = event => {
        setNewTask(event.target.value);
    };

    return (
        <>
            <div className={styles.container}>
                {isEditing ? (
                    <>
                        <input type="text" value={newTask} onChange={handleChange} className={styles.input_field} />
                        <button className={styles.save_button} onClick={handleSaveClick}>Save</button>
                    </>
                ) : (
                    <>
                        <p className={styles.title}>{children}</p>
                        <button className={styles.update_button} onClick={handleUpdateClick}>Update</button>
                        <button className={styles.delete_button} onClick={() => onClick(id)}>Delete</button>
                    </>
                )}
            </div>
        </>
    );
};

export default TodoField;