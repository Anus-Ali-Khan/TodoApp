import "./App.css";
import { useState } from "react";
import Addtodo from "./components/Addtodo";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [todos, setTodos] = useState([]);

  const handleClick = (item) => {
    if (item.length < 12) {
      setTodos([{ title: item, key: Math.random().toString() }, ...todos]);
    } else {
      alert("Enter text upto 12 chars");
    }
  };

  const handleDelete = (key) => {
    setTodos(
      todos.filter((todo) => {
        return todo.key !== key;
      })
    );
  };

  return (
    <>
      <Addtodo handleClick={handleClick} />
      <div className="todo-container">
        <div className="todolist">
          {todos.map((todo) => {
            return (
              <div className="addtodo">
                <input type="checkbox" />
                <div className="dlt-container">
                  <div className="title"> {todo.title}</div>

                  <MdDeleteOutline onClick={() => handleDelete(todo.key)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
