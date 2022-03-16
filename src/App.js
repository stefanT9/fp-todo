import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import TodoCreate from "./pages/TodoCreate";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos.length) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todos todos={todos} />} />
        <Route path="/todos/:todoId" element={<TodoDetails todos={todos} />} />
        <Route
          path="/todos/create"
          element={<TodoCreate todos={todos} setTodos={setTodos} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
