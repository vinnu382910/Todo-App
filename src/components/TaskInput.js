import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import './TaskInput.css'

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className='input-cont'>
      <input 
        className='input-add'
        placeholder='Add Your Task'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <button onClick={handleAddTask} className='add-btn'>Add Task</button>
    </div>
  );
};

export default TaskInput;
