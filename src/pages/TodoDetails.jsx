import React, {useContext} from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import TodosStore from "../store/todosStore";
import NotFoundPage from "./NotFound";

function TodoDetails() {
  const navigate = useNavigate();

  const { todoId } = useParams();
  const { findTodoById, deleteTodoById } = useContext(TodosStore);
  const todo = findTodoById(todoId);

  const handleClickDelete = async () =>{
    await deleteTodoById(todoId);
    navigate('/todos');
  }
  const renderTodoDetails = () => {
    return <div>
      <h2>
        {todo.title}
      </h2>
      <p>
        {todo.description}
      </p>
      <button onClick={handleClickDelete}> delete </button>
    </div>
  }

  return <div>
    { todo && renderTodoDetails()}
    { !!!todo && <NotFoundPage/>}
  </div>;
}

export default TodoDetails;
