import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className='heading-cont'>     
         <h1 className="todo-heading">Todo Lists</h1>
         <img src="todo-list logo.png" alt="todo-logo" className='todo-logo'/>
      </div>
      <hr className="todo-line" />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
