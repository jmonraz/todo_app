import React, { useState } from "react";
import styles from './TodoField.module.css';
import trashIcon from '../../assets/icons/trash_icon.png';
import editIcon from '../../assets/icons/edit_icon.png';

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
                        <div className={styles.content}>
                            <p className={styles.title}>{children}</p>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.update_button} onClick={handleUpdateClick}><img src={editIcon} alt="edit_icon" className={styles.icon} /></button>
                            <button className={styles.delete_button} onClick={() => onClick(id)}><img src={trashIcon} alt="trash_icon" className={styles.icon} /></button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default TodoField;