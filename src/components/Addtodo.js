import React, { useState } from "react";

const Addtodo = ({ handleClick }) => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="header">
        <h1>Todo App</h1>
      </div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn" onClick={() => handleClick(text)}>
        Add Todo
      </button>
    </div>
  );
};

export default Addtodo;
