// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react"
import TodoList from "./TodoList"
import './App.css';

const App = () => {
  const [task, setTask] = useState(``)
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (task.trim() == ``) return
    setTasks([...tasks, task])
    setTask(``)
  }

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i != index)
    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="input-container">
        <input 
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TodoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  )
}

export default App