import React from "react";
import { Link } from "react-router-dom";

function TodoCard({ id, title, description }) {
  return (
    <div className="todo-card-wrapper">
      <div className="todo-card">
        <div className="todo-card-header">
          <h2>{title}</h2>
        </div>
        <div className="todo-card-content">
          <p>{description}</p>
        </div>
        <div className="todo-card-footer">
          <Link to={id}> View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
