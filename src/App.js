import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import TodoCreate from "./pages/TodoCreate";
import { FirstStoreProvider } from "./store/myFirstStore";
import { TodosProvider } from "./store/todosStore";

function App() {
  console.log('app => ');

  return (
    <FirstStoreProvider>
      <TodosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/todos" element={<Todos/>} />
            <Route path="/todos/:todoId" element={<TodoDetails/>} />
            <Route
              path="/todos/create"
              element={<TodoCreate/>}
            />
          </Routes>
        </BrowserRouter>
      </TodosProvider>
    </FirstStoreProvider>
  );
}

export default App;
