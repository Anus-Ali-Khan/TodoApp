import "./App.css";
import { useState, useEffect } from "react";
import Addtodo from "./components/Addtodo";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function App() {
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState("");
  const [editTitle, setEditTitle] = useState("");

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
    setSelected(key);

    const prevtitle = todos.find((todo) => {
      return todo.key === key;
    });
    setEditTitle(prevtitle.title);
  };

  const handleDelete = (key) => {
    const deleteList = todos.filter((todo) => {
      return todo.key !== key;
    });

    setTodos(deleteList);
    localStorage.setItem("todos", JSON.stringify(deleteList));
  };

  const handleDoneEdit = (key) => {
    const doneEdit = todos.map((todo) => {
      if (todo.key === key) {
        return {
          ...todo,
          title: editTitle,
        };
      } else {
        return todo;
      }
    });

    setTodos(doneEdit);
    localStorage.setItem("todos", JSON.stringify(doneEdit));
    setSelected("");
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList) {
      setTodos(todoList);
    }
  }, []);

  return (
    <>
      <Addtodo handleClick={handleClick} />
      <div className="todo-container">
        <div className="todolist">
          {todos.map((todo) => {
            return (
              <div className="addtodo">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onClick={() => handleCheck(todo.key)}
                />
                <div className="dlt-container">
                  <div>
                    {selected === todo.key ? (
                      <input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                      />
                    ) : (
                      <div className="title">{todo.title}</div>
                    )}
                  </div>

                  <div className="icons">
                    {selected === todo.key ? (
                      <FaCheck onClick={() => handleDoneEdit(todo.key)} />
                    ) : (
                      <MdOutlineEdit onClick={() => handleEdit(todo.key)} />
                    )}

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
