import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [todos, settodos] = useState([]);
  const [newTodo, setNewtodo] = useState("");

  const getTodos = async () => {
    const output = await axios.get("http://localhost:8080/getTodos");

    const data = output.data;
    settodos([...data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = () => {
    settodos([...todos, newTodo]);
    setNewtodo("");
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>{todo.task}</div>
      ))}

      <input
        type="text"
        value={newTodo}
        onInput={(e) => setNewtodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default App;
