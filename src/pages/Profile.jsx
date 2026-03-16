import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("workquest_loggedin");
    if (loggedIn) {
      const users = JSON.parse(localStorage.getItem("workquest_users") || "[]");
      const userObj = users.find((u) => u.email === loggedIn);
      setUser(userObj);
    } else {
      setUser(null);
    }
  }, []);

  if (!user) {
    return (
      <div className="page-container">
        <h1>Profile</h1>
        <div className="profile-content">
          <h2>Your Profile</h2>
          <div className="profile-section">
            <h3>Account Information</h3>
            <p>You are not logged in. Please login to view your profile.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Profile</h1>
      <div className="profile-content">
        <h2>Your Profile</h2>
        <div className="profile-section">
          <h3>Account Information</h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: 17 }}>
            <li><b>Name:</b> {user.name}</li>
            <li><b>Email:</b> {user.email}</li>
            <li><b>Role:</b> {user.role}</li>
            {user.role === "employee" && (
              <>
                <li><b>Company:</b> {user.company}</li>
                <li><b>Position:</b> {user.position}</li>
                <li><b>Employee ID:</b> {user.employeeId}</li>
              </>
            )}
            {user.role === "user" && (
              <>
                <li><b>Phone:</b> {user.phone}</li>
                <li><b>Address:</b> {user.address}</li>
                <li><b>Date of Birth:</b> {user.dob}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
