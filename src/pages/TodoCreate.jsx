import React, { useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

function TodoCreate(props) {
  const { todos, setTodos } = props;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreateTodo = () => {
    setTodos((prev) => {
      const id = v4();
      return [
        ...prev,
        {
          title,
          description,
          id,
        },
      ];
    });

    navigate("/todos");
  };

  const handleCancel = () => {
    navigate("/todos");
  };

  return (
    <div>
      <form>
        <div className="form-section">
          <label for="title"> title </label>
          <input name="title" value={title} onChange={handleTitleChange} />
        </div>
        <div className="form-section">
          <label for="description"> description </label>
          <input
            name="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <button onClick={handleCreateTodo}>create todo</button>
          <button onClick={handleCancel}>cancel</button>
        </div>
      </form>
    </div>
  );
}

export default TodoCreate;
