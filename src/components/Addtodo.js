import React, { useState } from "react";
import "../components/Addtodo.css";

const Addtodo = ({ handleClick }) => {
  const [items, setItems] = useState("");

  return (
    <div className="App">
      <div className="header">
        <h1>Todo App</h1>
      </div>
      <input
        type="text"
        placeholder="Add Todo..."
        className="input"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <button className="btn" onClick={() => handleClick(items)}>
        Add Todo
      </button>
    </div>
  );
};

export default Addtodo;
