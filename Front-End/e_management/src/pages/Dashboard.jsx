import { useEffect, useState } from "react";
import API from "../api/api";

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [editId, setEditId] = useState(null);

    // 🔁 GET ALL TASKS (for logged-in user)
    const getTasks = async () => {
        try {
            const res = await API.get("/tasks/tasks");
            setTasks(res.data);
        } catch (err) {
            alert("Failed to fetch tasks");
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    // ➕ ADD TASK
    const addTask = async () => {
        try {
            await API.post("/tasks/tasks", {
                title,
                description
            });

            setTitle("");
            setDescription("");
            getTasks();

        } catch (err) {
            alert("Error adding task");
        }
    };

    // ✏️ UPDATE TASK
    const updateTask = async () => {
        try {
            await API.put(`/tasks/tasks/${editId}`, {
                title,
                description
            });

            setTitle("");
            setDescription("");
            setEditId(null);
            getTasks();

        } catch (err) {
            alert("Error updating task");
        }
    };

    // ❌ DELETE TASK
    const deleteTask = async (id) => {
        try {
            await API.delete(`/tasks/tasks/${id}`);
            getTasks();
        } catch (err) {
            alert("Error deleting task");
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h2>Task Dashboard</h2>

            {/* INPUT SECTION */}
            <div>
                <input
                    placeholder="Task Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    placeholder="Task Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                {editId ? (
                    <button onClick={updateTask}>Update Task</button>
                ) : (
                    <button onClick={addTask}>Add Task</button>
                )}
            </div>

            <hr />

            {/* TASK LIST */}
            {tasks.length === 0 ? (
                <p>No tasks found</p>
            ) : (
                tasks.map((task) => (
                    <div
                        key={task.id}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            margin: "10px 0"
                        }}
                    >
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p><b>Status:</b> {task.status}</p>

                        <button
                            onClick={() => {
                                setEditId(task.id);
                                setTitle(task.title);
                                setDescription(task.description);
                            }}
                        >
                            Edit
                        </button>

                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}