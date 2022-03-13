import React, { useEffect, useState } from 'react';
import { HashRouter } from "react-router-dom";

import './App.css';
// todo list component
import TodoList from "./components/TodoList";
// todo form component
import TodoForm from "./components/TodoForm";

import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

const d = new Date();

const yr = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();

function App() {
  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

    return (
      <HashRouter base="/">
      <div className="App">
        <Typography style={{ padding: 16 }} variant="h2">{`${month}/${day}/${yr}`}</Typography> 
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        />
      </div>
      </HashRouter>
    );
}

export default App;
