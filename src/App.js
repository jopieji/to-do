import { render } from "@testing-library/react";
// header component
import Header from "./head";
// todo list component
import TodoList from "./TodoList";
import data from './data.json';
import React, { useState } from 'react';
import './App.css';


function App() {
  const [ todoList, setTodoList ] = useState(data);
    return (
      <div className="App">
        <Header/>
        <TodoList todoList={todoList}/>
      </div>
    );
}

export default App;
