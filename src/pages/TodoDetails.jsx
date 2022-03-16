import React from "react";
import { useParams } from "react-router-dom";

function TodoDetails() {
  const params = useParams();

  return <div>todo details Page {params.todoId}</div>;
}

export default TodoDetails;
