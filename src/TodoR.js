import { useEffect, useState } from "react";
import "./styles.css";
import { Todoform } from "./TodoForm";
import { TodoList } from "./TodoList";

export default function TodoR() {
  const [todos, setTodos] = useState(() => {
    try {
      const localValue = localStorage.getItem("ITEMS");
      return localValue ? JSON.parse(localValue) : [];
    } catch (error) {
      console.error("error parsing todos from localstorage : ", error);
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Todoform addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      {todos.length>0 &&< TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />}
    </>
  );
}
