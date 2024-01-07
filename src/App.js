import "./App.css";
import { useState } from "react";
import Addtodo from "./components/Addtodo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleClick = (item) => {
    setTodos([...todos, { title: item }]);
  };

  return (
    <>
      <Addtodo handleClick={handleClick} />
      <div>
        {todos.map((todo) => {
          return <div className="addtodo">{todo}</div>;
        })}
      </div>
    </>
  );
}

export default App;
