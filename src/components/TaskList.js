import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../redux/taskSlice';
import './TaskList.css'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditTask = (task) => {
    setEdit(task.id);
    setEditText(task.text);
  };

  const handleSaveEdit = (task) => {
    dispatch(editTask({ id: task.id, text: editText }));
    setEdit(null);
  };

  const formatedDate = dateString => {
    const date = new Date(dateString);

    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
  
    const optionsTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  
    return `${formattedDate.replace(',', '')} at ${formattedTime}`;
  }


  return (
    <ul className='task-list-cont'>
      {tasks.map((task) => (
        <li className='task-cont' key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none',
          textDecorationColor: task.completed ? 'red' : 'none'
         }}>
          {edit === task.id ? (
            <input 
              type="text" 
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleSaveEdit(task)}
              onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit(task)}
            />
          ) : (
            <>
             <div className='checkbox-cont'>
                <input onClick={() => dispatch(toggleTask(task.id))} type="checkbox" className='check-box' id="subscribe" name="subscribe"></input>
              <div className='text-cont'>
                <span className='task-text'>{task.text}</span> 
                <span>{formatedDate(task.dateTime)}</span>
                </div>
             </div>
              <div className='btn-cont'>
                <button onClick={() => handleEditTask(task)} className='btn'>Edit</button>
                <button onClick={() => dispatch(deleteTask(task.id))} className='btn'>Delete</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
