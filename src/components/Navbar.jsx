import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">WorkQuest</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Find Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn">Post a Job</Link>
        <span style={{marginLeft: 30, display: 'inline-flex', gap: 18, verticalAlign: 'middle'}}>
          <span title="Saved Jobs" style={{fontSize: 22, cursor: 'pointer'}}>🔖</span>
          <span title="Messages" style={{fontSize: 22, cursor: 'pointer'}}>💬</span>
          <span title="Notifications" style={{fontSize: 22, cursor: 'pointer'}}>🔔</span>
          <span title="Profile" style={{fontSize: 22, cursor: 'pointer'}}>👤</span>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
