import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./Actions/action";
import { useState } from "react";

function App() {
  const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };

  return (
    <>
      <h1>My todo-list</h1>
      <div className="todo">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button onClick={todoSubmitHandler}>Add task</button>

      <div className="todos">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}  >
              <p>{todo.task}</p>
              <button  onClick={() => dispatch(removeTodo(todo.id))}>Done</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
