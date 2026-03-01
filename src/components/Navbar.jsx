import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  const handleSavedJobs = () => {
    navigate('/saved-jobs')
  }

  const handleMessages = () => {
    navigate('/messages')
  }

  const handleNotifications = () => {
    navigate('/notifications')
  }

  const handleProfile = () => {
    navigate('/profile')
  }

  return (
    <nav className="navbar">
      <h2 className="logo">WorkQuest</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Find Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn">Post a Job</Link>
        <span style={{marginLeft: 30, display: 'inline-flex', gap: 18, verticalAlign: 'middle'}}>
          <span title="Saved Jobs" style={{fontSize: 22, cursor: 'pointer'}} onClick={handleSavedJobs}>🔖</span>
          <span title="Messages" style={{fontSize: 22, cursor: 'pointer'}} onClick={handleMessages}>💬</span>
          <span title="Notifications" style={{fontSize: 22, cursor: 'pointer'}} onClick={handleNotifications}>🔔</span>
          <span title="Profile" style={{fontSize: 22, cursor: 'pointer'}} onClick={handleProfile}>👤</span>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
