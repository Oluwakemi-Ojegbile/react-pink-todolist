import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
    return (
      <div className="App">
        <div className="todo-container">
          <h1 className="app_title">MY TODOLIST</h1>
          <Todos />
          <AddTodo />
        </div>
      </div>
    );
}

export default App;
