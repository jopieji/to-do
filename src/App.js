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

function getDate() {
  let yr = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  return `${month + 1}/${day}/${yr}`;
}



function App() {
  const [ todos, setTodos ] = useState([]);
  const [ date, setDate ] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
      setDate(getDate());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    setDate(getDate());
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
    setDate(getDate());
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
    setDate(getDate());
  }

    return (
      <HashRouter base="/">
      <div className="App">
        <Typography style={{ padding: 16 }} variant="h4">{`Todos ${date}`}</Typography> 
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
