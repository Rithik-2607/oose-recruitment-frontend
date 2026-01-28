import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Indeed</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Find Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn">Post a Job</Link>
      </div>
    </nav>
  )
}

export default Navbar
