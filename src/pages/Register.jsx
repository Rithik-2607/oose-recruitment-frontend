import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("All fields are required ❌");
      return;
    }
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("workquest_users") || "[]");
    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      setMessage("Email already registered ❌");
      return;
    }
    users.push({ name, email, password });
    localStorage.setItem("workquest_users", JSON.stringify(users));
    setMessage("Registration successful ✅ Redirecting to login...");
    setTimeout(() => navigate("/login"), 1500);
  };

  return (
    <div className="auth">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ marginTop: 10, fontWeight: "bold" }}>{message}</p>}
    </div>
  );
}

export default Register;
