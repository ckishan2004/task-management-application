const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

let tasks = [];

app.post("/tasks", (req, res) => {
    const { title, description } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({ error: "Title is required" });
    }


    const newTask = {
        id: Date.now().tostring(),
        title: title.trim(),
        description: description ? description.trim() : "",
        status: "Pending",
        createdDate: new Date().toLocaleString()
    }

    tasks.push(newTask);
    res.status(201).json({
        message: "task added successfully",
        task: newTask,
    });
});

// app.get("/tasks", (req, res) => {
//     res.status(200).json(tasks);
// });

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const task = task.find((t) => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "task is not found" });
    }

    if (status != "pending" && status != "completed") {
        return res.status(400).json({ error: "invalid status value" });
    }

    task.status = status;
    res.status(200).json({
        message: "task status updated successfully",
        task,
    });
});

app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex((t) => t.id == id);

    if (taskIndex === -1) {
        return res.status(404).json({ error: " task is not fonud" });
    }
    const deletedTask = tasks.splice(taskIndex, 1);
    res.status(200).json({
        message: "task deleted successfull",
        task: deketedTask[0],
    });
});

app.listen(PORT, () => {
    console.log(`server is run on http://localhost:${5000}`);
});