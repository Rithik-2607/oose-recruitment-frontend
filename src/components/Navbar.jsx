import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Get logged in user from localStorage
    const loggedIn = localStorage.getItem('workquest_loggedin')
    if (loggedIn) {
      const users = JSON.parse(localStorage.getItem('workquest_users') || '[]')
      const userObj = users.find(u => u.email === loggedIn)
      setUser(userObj)
    } else {
      setUser(null)
    }
  }, [])

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
          <span title="Profile" style={{fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center'}} onClick={handleProfile}>
            👤
            {user && (
              <span style={{ marginLeft: 6, fontSize: 15, color: '#2557a7', fontWeight: 600 }}>
                {user.email}
              </span>
            )}
          </span>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
