import "./App.css";
import { useState } from "react";
import Addtodo from "./components/Addtodo";
import { MdDeleteOutline } from "react-icons/md";

function App() {
  const [todos, setTodos] = useState([]);

  const handleClick = (item) => {
    if (item.length < 12) {
      const newTodo = {
        title: item,
        key: Math.random().toString(),
        isCompleted: false,
      };
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setTodos([newTodo, ...todos]);
    } else {
      alert("Enter text upto 12 chars");
    }
  };

  const handleTick = (key) => {
    const updatedTodoList = todos.map((todo) => {
      if (todo.key === key) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodoList);
    localStorage.setItem("todos", JSON.stringify([updatedTodoList]));
  };

  const handleDelete = (key) => {
    setTodos(
      todos.filter((todo) => {
        return todo.key !== key;
      })
    );
    localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  const todolist = JSON.parse(localStorage.getItem("todos"));

  return (
    <>
      <Addtodo handleClick={handleClick} />
      <div className="todo-container">
        <div className="todolist">
          {todolist.map((todo) => {
            return (
              <div className="addtodo">
                <input type="checkbox" onClick={() => handleTick(todo.key)} />
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
