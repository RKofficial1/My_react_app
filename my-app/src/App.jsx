import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // list of tasks
  const [newTask, setNewTask] = useState(""); // input value

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]); // add new task
    setNewTask(""); // clear input
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      <h1>📝 To-Do List</h1>

      {/* Input + Button */}
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "8px", width: "200px", marginRight: "10px" }}
      />
      <button
        onClick={addTask}
        style={{
          padding: "8px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add
      </button>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              background: "#050404ff",
              margin: "5px auto",
              padding: "10px",
              width: "250px",
              borderRadius: "5px",
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
