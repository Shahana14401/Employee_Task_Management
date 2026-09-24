import { useEffect, useState } from "react";
import API from "../api/api";
export default function AdminDashboard() {
    const [tasks, setTasks] = useState([]);
    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState("");
    const [users, setUsers] = useState([]);
    const [description, setDescription] = useState("");
    // const [status, setStatus] = useState("");
    const [userId, setUserId] = useState("");
    const getTasks = async () => {
        const res = await API.get("/tasks/get-all-tasks");
        console.log(res);
        setTasks(res.data.result || []);
    }
    const getUsers = async () => {
        const res = await API.get("/users/get-all-users");
        console.log(res);
        setUsers(res.data.result || []);
    }
    useEffect(() => {
        getTasks();
        getUsers();
    }, []);
    const addTask = async () => {
        try {
            await API.post("/tasks/assign-task/0", {
                title,
                description,
                userId
            });

            setTitle("");
            setDescription("");
            getTasks();

        } catch (err) {
            alert("Error adding task");
        }
    };
    const updateTask = async () => {
        try {
            await API.post(`/tasks/assign-task/${editId}`, {
                title,
                description,
                userId
            });

            setTitle("");
            setDescription("");
            setEditId(null);
            getTasks();

        } catch (err) {
            alert("Error updating task");
        }
    };
    const deleteTask = async (id) => {
        try {
            await API.delete(`/tasks/tasks/${id}`);
            getTasks();
        } catch (err) {
            alert("Error deleting task");
        }
    };
    return (
        <div>
            <h1>Admin Dashboard</h1>
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

                <select value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value="">Select User</option>
                    {users?.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>

                {editId ? (
                    <button onClick={updateTask}>Update Task</button>
                ) : (
                    <button onClick={addTask}>Add Task</button>
                )}
            </div>
            {
                tasks.length === 0 ? (
                    <p>No tasks found</p>
                ) : (
                    tasks?.map((task) => (
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
                            <p><b>Name:</b> {task.User?.name || "N/A"}</p>
                            <p><b>Email:</b> {task.User?.email || "N/A"}</p>
                            <p><b>User ID:</b>{task.userId}</p>
                            <p><b>Status:</b> {task.status}</p>

                            <button
                                onClick={() => {
                                    setEditId(task.id);
                                    setTitle(task.title);
                                    setUserId(task.userId);
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
                )
            }
        </div>
    );
}