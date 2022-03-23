import React, { useContext } from "react";
import TodoCard from "../components/TodoCard";
import { Link } from "react-router-dom";
import TodosStore from "../store/todosStore";

function Todos() {
  const {todos, postTodo, isPending, error} = useContext(TodosStore);

  console.log(todos);
  console.log('here i am');
  
  return (
    <div>
      <ul>
        { todos.map(({ id, title, description }) => (
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
