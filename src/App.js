import React, { useState } from "react";

import "./App.css";
import Box from "./components/Box/Box";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button/Button";
import TodoField from "./components/TodoField/TodoField";


const App = () => {

  const [task, setTask] = useState('');

  const handleOnTaskChange = event => {
    setTask(event.target.value);
  };
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Box>
          <div className="content-row">
            <p className="title">TODO LIST</p>
          </div>
          <div className="content-row">
            <InputField type="text" placeholder="Write task" value={task} onChange={handleOnTaskChange} />
            <Button onClick={() => { }} theme="main-button">+</Button>
          </div>
          <div className="content-column">
            <TodoField>Hello there</TodoField>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default App;
