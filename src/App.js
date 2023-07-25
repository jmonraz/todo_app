import React, { useState } from "react";

import "./App.css";
import Box from "./components/Box/Box";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button/Button";
import TodoField from "./components/TodoField/TodoField";


const App = () => {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleOnTaskChange = event => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = { id: Math.random(), value: task.trim() };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleRemoveTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Box>
          <div className="content-row">
            <p className="title">TODO LIST</p>
          </div>
          <div className="content-row">
            <InputField type="text" placeholder="Write task" value={task} onChange={handleOnTaskChange} />
            <Button onClick={handleAddTask} theme="main-button">+</Button>
          </div>
          <div className="sub-container">
            <div className="content-column">
              <ul>
                {tasks.map(task => (
                  <li value={task.id}><TodoField onClick={handleRemoveTask} id={task.id}>{task.value}</TodoField></li>
                ))}
              </ul>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default App;
