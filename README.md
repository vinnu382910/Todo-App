***Simple React To-Do Application***

This is a simple To-Do application built using ReactJS that allows users to add, view, and delete tasks. The project demonstrates the use of HTML, CSS, JavaScript, React components, hooks, and state management using Redux.

***Features***

1) Add Task: Users can input a task into a text field and add it  to the list by pressing a button or pressing Enter.
2) View Tasks: Displays all added tasks in a list format.
3) Delete Task: Each task has a delete button that removes the task from the list.
4) Edit Task: Each task has an edit button that allows users to modify the task text.
5) Mark Task as Completed: Users can mark tasks as completed, which strikes through the task with a red line.
6) Persistent Storage: Tasks are saved to local storage, so they are not lost on page reload.
 

****Getting Started:-****

***Prerequisites***

* Node.js (v14 or later recommended)
* npm (v6 or later)

***Installation***

1) Clone the repository:
* git clone https://github.com/your-username/simple-react-todo-app.git
* cd simple-react-todo-app
2) Install the dependencies:
* npm install
3) Start the development server:
* npm start
* The application will be available at http://localhost:3000.

***Project Structure***

 /src 

  /components
 
    TaskInput.js
    TaskList.js
  /redux
 
    store.js
    taskSlice.js
 
  /utils
 
    formatDateTime.js
  
  App.js
  
  index.js
  
  App.css

***/components***

* TaskInput.js: A component for adding new tasks.
* TaskList.js: A component for displaying the list of tasks.

***/redux***

* store.js: Configures the Redux store.
* taskSlice.js: Contains the Redux slice for managing tasks.

***/utils***

* formatDateTime.js: A utility function to format the date and time of tasks.

***App.js***
* The main application component.

***index.js***
* The entry point of the application.

***App.css***
* Contains the CSS styles for the application.

****Usage****

***Adding a Task***

1) Enter the task text in the input field.
Press Enter or click the "Add" button.
Editing a Task
Click the "Edit" button next to the task you want to edit.

2) Modify the task text and press Enter or click outside the input field to save the changes.

***Deleting a Task***

1) Click the "Delete" button next to the task you want to delete.

***Marking a Task as Completed***

1) Click the task text to toggle its completed state. Completed tasks will have a red strikethrough.

***Acknowledgements****

This project was built with the help of ChatGPT, leveraging the knowledge I have of React. I do not have prior experience with Redux, and ChatGPT provided guidance on using Redux for state management.

