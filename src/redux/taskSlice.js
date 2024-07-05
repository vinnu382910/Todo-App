import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const date = new Date()
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false,dateTime: date.toString() });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  },
});



export const { addTask, deleteTask, editTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
