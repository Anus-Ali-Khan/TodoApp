import "./App.css";
import { useState, useEffect } from "react";
import Addtodo from "./components/Addtodo";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

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

  const handleCheck = (key) => {
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

    localStorage.setItem("todos", JSON.stringify(updatedTodoList));
    setTodos(updatedTodoList);
  };

  const handleEdit = (key) => {
    const editList = todos.map((todo) => {
      if (todo.key === key) {
        return {
          ...todo,
          title: <input />,
        };
      } else {
        return todo;
      }
    });

    setTodos(editList);
  };

  const handleDelete = (key) => {
    setTodos(
      todos.filter((todo) => {
        return todo.key !== key;
      })
    );
    localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoList);
  }, []);

  return (
    <>
      <Addtodo handleClick={handleClick} />
      <div className="todo-container">
        <div className="todolist">
          {todos.map((todo) => {
            return (
              <div className="addtodo">
                <input type="checkbox" onClick={() => handleCheck(todo.key)} />
                <div className="dlt-container">
                  <div className="title"> {todo.title}</div>
                  <div className="icons">
                    <MdOutlineEdit onClick={() => handleEdit(todo.key)} />
                    <MdDeleteOutline onClick={() => handleDelete(todo.key)} />
                  </div>
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
