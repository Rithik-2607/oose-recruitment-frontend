import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("workquest_users") || "[]");
    const user = users.find(
      (u) => u.email === username && u.password === password
    );
    if (user) {
      setMessage("Login successful ✅");
      setTimeout(() => {
        setMessage("");
        setUsername("");
        setPassword("");
        navigate("/jobs");
      }, 1000);
    } else {
      setMessage("Invalid credentials or user not registered ❌");
    }
  };

  return (
    <div style={styles.container} className="auth">
      <h1 style={styles.logo}>WorkQuest</h1>

      <form style={styles.form} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>

      <div style={{ marginTop: 10 }}>
        New user? <Link to="/register">Register</Link>
      </div>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f2ef",
  },
  logo: {
    color: "#2557a7",
    fontSize: "32px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2557a7",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Login;
