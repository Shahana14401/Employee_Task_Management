import { useState } from "react";
import API from "../api/api";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", {
                userName,
                password,
            });
            console.log(res.data);
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                alert("Login Successful");
                window.location.href = "/dashboard";
            } else {
                alert(res.data.message || "Login Failed");
                // console.log(res);
            }
            // console.log(res);
            // alert("Login Successful");
        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="UserName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}