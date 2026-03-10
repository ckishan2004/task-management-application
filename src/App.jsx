import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {

  if (!title.trim()) return;

  const newTask = {
    id: Date.now(),
    title: title,
    description: description,
    status: "Pending",
    createdDate: new Date().toLocaleString()
  };

  setTasks([...tasks, newTask]);
};

  const toggleComplete = (id) => {

  const updatedTasks = tasks.map((task) =>
    task.id === id
      ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
      : task
  );

  setTasks(updatedTasks);
};

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="app-bg min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-lg border-0 app-card">
              <div className="card-body p-4 p-md-5">
                <h2 className="text-center mb-4 fw-bold">Task Management App</h2>

                <TaskForm addTask={addTask} />

                <TaskList
                  tasks={tasks}
                  toggleComplete={toggleComplete}
                  deleteTask={deleteTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;