import React, { useState } from 'react'

const jobs = [
  {
    id: 1,
    title: "(MMA) Assistant Manager- Sales Support",
    company: "Morrison Express",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    rating: 3.8,
    description: "Assist in sales support, manage client queries, coordinate with teams, and ensure customer satisfaction.",
  },
  {
    id: 2,
    title: "MAAIC",
    company: "Morrison Express",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    rating: 3.3,
    description: "Responsible for import/export documentation and client communication.",
  },
  {
    id: 3,
    title: "SALES OFFICER",
    company: "TVS Training and Services",
    location: "Chennai, Tamil Nadu",
    type: "Permanent",
    rating: 4.0,
    description: "Drive sales, manage customer relationships, and achieve targets in the Chennai region.",
  },
  {
    id: 4,
    title: "Field Sales Executive - Chennai",
    company: "Rentokil Initial",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    rating: 3.9,
    description: "Field sales, client visits, and reporting for pest control services.",
  },
  {
    id: 5,
    title: "Software Engineer",
    company: "Infosys",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    rating: 4.2,
    description: "Develop and maintain software applications for global clients.",
  },
  {
    id: 6,
    title: "Backend Developer",
    company: "TCS",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    rating: 3.7,
    description: "Work on backend APIs, databases, and cloud deployments.",
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Zoho",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    rating: 4.1,
    description: "Design user interfaces and experiences for SaaS products.",
  },
  {
    id: 8,
    title: "QA Analyst",
    company: "Cognizant",
    location: "Pune, Maharashtra",
    type: "Full-time",
    rating: 3.6,
    description: "Test software products and ensure quality standards.",
  },
  {
    id: 9,
    title: "HR Executive",
    company: "Wipro",
    location: "Bangalore, Karnataka",
    type: "Full-time",
    rating: 3.9,
    description: "Manage HR operations, recruitment, and employee engagement.",
  },
  {
    id: 10,
    title: "Marketing Specialist",
    company: "HCL",
    location: "Noida, Uttar Pradesh",
    type: "Full-time",
    rating: 4.0,
    description: "Plan and execute marketing campaigns for IT services.",
  },
]

function Jobs() {
  const [selected, setSelected] = useState(jobs[0]);
  return (
    <div style={{ display: 'flex', gap: 30, margin: '40px 0', justifyContent: 'center' }}>
      {/* Left: Job List */}
      <div style={{ width: 400, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 20 }}>
        <h2 style={{ fontSize: 20, marginBottom: 18 }}>Jobs for you</h2>
        <div style={{ fontSize: 13, color: '#888', marginBottom: 18 }}>Jobs based on your activity on WorkQuest</div>
        <div>
          {jobs.map(job => (
            <div
              key={job.id}
              onClick={() => setSelected(job)}
              style={{
                border: selected.id === job.id ? '2px solid #2557a7' : '1px solid #ddd',
                borderRadius: 10,
                padding: 16,
                marginBottom: 14,
                background: selected.id === job.id ? '#f6faff' : '#fff',
                cursor: 'pointer',
                boxShadow: selected.id === job.id ? '0 2px 8px #e3eaff' : 'none',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 16 }}>{job.title}</div>
              <div style={{ color: '#333', fontSize: 14 }}>{job.company}</div>
              <div style={{ color: '#666', fontSize: 13 }}>{job.location}</div>
              <div style={{ marginTop: 6, fontSize: 13 }}>
                <span style={{ background: '#eaf1fb', color: '#2557a7', borderRadius: 4, padding: '2px 8px', marginRight: 8 }}>{job.type}</span>
                <span style={{ color: '#2557a7', fontWeight: 500 }}>Easily apply</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Job Details */}
      <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #eee', padding: 30, minWidth: 350 }}>
        <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 6 }}>{selected.title}</div>
        <div style={{ color: '#2557a7', fontWeight: 500 }}>{selected.company} <span style={{ color: '#222', fontWeight: 400, fontSize: 15 }}>• {selected.rating} ★</span></div>
        <div style={{ color: '#666', fontSize: 15, marginBottom: 18 }}>{selected.location}</div>
        <button style={{ background: '#2557a7', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 22px', fontWeight: 500, fontSize: 16, marginBottom: 18 }}>Apply now</button>
        <span style={{ marginLeft: 10, fontSize: 20, cursor: 'pointer' }} title="Save">🔖</span>
        <span style={{ marginLeft: 10, fontSize: 20, cursor: 'pointer' }} title="Not Interested">🚫</span>
        <span style={{ marginLeft: 10, fontSize: 20, cursor: 'pointer' }} title="Share">🔗</span>
        <div style={{ marginTop: 30 }}>
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 8 }}>Job details</div>
          <div style={{ marginBottom: 8 }}><b>Job type:</b> {selected.type}</div>
          <div style={{ marginBottom: 8 }}><b>Location:</b> {selected.location}</div>
          <div style={{ marginBottom: 8 }}><b>Full job description:</b></div>
          <div style={{ color: '#444', fontSize: 15 }}>{selected.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
