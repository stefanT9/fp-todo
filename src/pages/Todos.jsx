import React from "react";
import TodoCard from "../components/TodoCard";
import { Link } from "react-router-dom";

function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map(({ id, title, description }) => (
          <li key={id}>
            <TodoCard id={id} title={title} description={description} />
          </li>
        ))}
      </ul>
      <Link to="create">Create TODO</Link>
    </div>
  );
}

export default Todos;
