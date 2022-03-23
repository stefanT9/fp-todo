import React, { useState, useEffect, createContext } from 'react';

const TodosStore = createContext({})

export const TodosProvider = ({ children }) => {
  console.log('todos provider => ')
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch('http://localhost:3000/todos');
        setTodos(await data.json());
        setIsPending(false);
      } catch (err) {
        setError(err);
        setIsPending(false);
      }
    })();
  }, []);

  const postTodo = async (todo) => {
    try {
      const data = await fetch('http://localhost:3000/todos', {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "content-type": 'application/json',
        }
      });
      const newTodo = await data.json();

      setTodos((prev) => [...prev, newTodo]);
    } catch (err) {
      setError(err);
    }
  }

  const findTodoById = (todoId) => {
    return todos.find((todo) => todo.id === todoId);
  }

  const deleteTodoById = async (todoId) => {
    try {
      await fetch(`http://localhost:3000/todos?id=${todoId}`, {
        method: "DELETE",
      });
      setTodos((prev) => prev.filter((todo)=>todo.id!==todoId));

    } catch (err) {
      setError(err);
    }
  }

  return <TodosStore.Provider value={{
    todos,
    postTodo,
    findTodoById,
    deleteTodoById,
    error,
    isPending
  }}>
    {children}
  </TodosStore.Provider>
}
export default TodosStore;