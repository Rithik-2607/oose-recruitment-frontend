import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("user"); // 'user' or 'employee'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // employee specific
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  // user only
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setCompany("");
    setPosition("");
    setEmployeeId("");
    setPhone("");
    setAddress("");
    setDob("");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // basic validations
    if (!name || !email || !password) {
      setMessage("All common fields are required ");
      return;
    }
    if (role === "employee") {
      if (!company || !position || !employeeId) {
        setMessage("All employee fields are required ");
        return;
      }
    }
    if (role === "user") {
      if (!phone || !address || !dob) {
        setMessage("All user fields are required ");
        return;
      }
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("workquest_users") || "[]");
    // Check if email already exists
    if (users.some((u) => u.email === email)) {
      setMessage("Email already registered ");
      return;
    }

    const newAccount = {
      role,
      name,
      email,
      password,
      // include employee fields only when role is employee
      ...(role === "employee" && { company, position, employeeId }),
      ...(role === "user" && { phone, address, dob }),
    };

    users.push(newAccount);
    localStorage.setItem("workquest_users", JSON.stringify(users));

    setMessage("Registration successful  Redirecting to login...");
    setTimeout(() => {
      resetFields();
      navigate("/login");
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'url("/login background.jpg") center/cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="auth" style={{
        width: 760,
        minHeight: 520,
        margin: "0 auto",
        background: 'rgba(255,255,255,0.18)', // transparent
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        display: 'flex',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
        {/* Left image section */}
        <div style={{
          width: 320,
          minWidth: 220,
          maxWidth: 320,
          height: 520,
          background: 'url("/container-side-pic.jpeg") center/cover no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: 28,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        }}>
          {/* <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 10 }}>Welcome to WorkQuest</h2> */}
          <p style={{ fontSize: 15, lineHeight: 1.5, textAlign: 'center', maxWidth: 220 }}>
            {/* Join our recruitment platform to find your dream job or the perfect candidate. Register now to get started! */}
          </p>
        </div>
        {/* Right form section */}
        <div style={{
          flex: 1,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
          background: 'rgba(255,255,255,0.18)', // transparent white for form
          boxShadow: '0 2px 16px rgba(0,0,0,0.04)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Create Account</h2>

          {/* Role toggle buttons in the same container */}
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <button
              type="button"
              onClick={() => setRole("user")}
              style={{
                flex: 1,
                padding: 8,
                cursor: "pointer",
                background: role === "user" ? "#1E90FF" : "#f0f0f0",
                color: role === "user" ? "white" : "black",
                border: "1px solid #ccc",
              }}
            >
              User
            </button>

            <button
              type="button"
              onClick={() => setRole("employee")}
              style={{
                flex: 1,
                padding: 8,
                cursor: "pointer",
                background: role === "employee" ? "#1E90FF" : "#f0f0f0",
                color: role === "employee" ? "white" : "black",
                border: "1px solid #ccc",
              }}
            >
              Employee
            </button>
          </div>

          {/* Fixed height for form fields container to prevent layout shift */}
          <div style={{ minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

              {/* User-only extra fields */}
              {role === "user" && (
                <>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </>
              )}

              {/* Employee-only fields (rendered in the same container) */}
              {role === "employee" && (
                <>
                  <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Employee ID"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                  />
                </>
              )}

              <button type="submit">Register</button>
            </form>
          </div>

          {message && <p style={{ marginTop: 10, fontWeight: "bold" }}>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Register;
