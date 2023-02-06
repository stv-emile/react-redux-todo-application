import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, markAsDone, removeTodo } from "./Actions/action";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState("");
  const [isDone, setIsDone] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const todoSubmitHandler = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, isDone, todo));
      setCounter(counter + 1);
      setTodo("");
      setIsDone(false);
      console.log(counter);
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
              <input type="checkbox" checked={todo.isDone} onChange={(event)=>{ dispatch(markAsDone(todo.id)) }}/>
              <p>{todo.task}</p>
              <button  onClick={() => dispatch(removeTodo(todo.id))}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
