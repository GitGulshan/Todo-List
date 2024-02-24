import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { addTodo, deleteTodo } from "./todoSlice";

function App() {
  const todo = useSelector((state) => state.todo.list);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoFunc = () => {
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };

  const deleteTodoFunc = (value) => {
    dispatch(deleteTodo(value));
  };

  return (
    <div>
      <ul className="list-group">
        {todo.map((item) => (
          <div>
            <li className="list-group-item">
              {item}{" "}
              <button
                className="btn btn-danger"
                onClick={() => deleteTodoFunc(item)}
              >
                x
              </button>
            </li>
          </div>
        ))}
      </ul>
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Add your task"
          value={newTodo}
          onInput={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={addTodoFunc}>
        Add
      </button>
    </div>
  );
}

export default App;
