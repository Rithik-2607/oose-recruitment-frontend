import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Prevent scroll on the home page
  React.useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, []);

  const handleFindJobs = () => {
    // Check if user is logged in (simulate by checking localStorage for a 'workquest_loggedin' flag)
    const users = JSON.parse(localStorage.getItem("workquest_users") || "[]");
    const loggedIn = localStorage.getItem("workquest_loggedin");
    // Get all job objects from jobs page (simulate by hardcoding or using localStorage if available)
    const jobs = [
      { title: "(MMA) Assistant Manager- Sales Support" },
      { title: "MAAIC" },
      { title: "SALES OFFICER" },
      { title: "Field Sales Executive - Chennai" },
      { title: "Software Engineer" },
      { title: "Backend Developer" },
      { title: "UI/UX Designer" },
      { title: "QA Analyst" },
      { title: "HR Executive" },
      { title: "Marketing Specialist" }
    ];
    if (!loggedIn) {
      navigate("/login");
      return;
    }
    // Find the job that matches
    const match = jobs.find(j => j.title.toLowerCase().includes(title.trim().toLowerCase()));
    if (match) {
      // Save the search to localStorage so Jobs page can pick it up
      localStorage.setItem("workquest_search_title", match.title);
      navigate("/jobs");
    } else {
      alert("No matching jobs found. Please try a different title.");
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 600,
        padding: '40px 30px',
        borderRadius: 10,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        background: '#f3f2ef',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <h1 style={{ marginBottom: 24, marginTop: 0 }}>Find your next job</h1>
        <div className="search-box" style={{ width: '100%' }}>
          <input type="text" placeholder="Job title or keywords" value={title} onChange={e => setTitle(e.target.value)} style={{ width: '100%', marginBottom: 10, padding: 10, fontSize: 16 }} />
          <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} style={{ width: '100%', marginBottom: 10, padding: 10, fontSize: 16 }} />
          <button onClick={handleFindJobs} style={{ width: '100%', padding: 10, background: '#2557a7', color: 'white', border: 'none', fontSize: 16, borderRadius: 4 }}>Find Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Home
