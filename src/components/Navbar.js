import React, { useEffect,useState  } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("name");

    navigate("/login");

  }
  useEffect(() => {
    const storedUser = localStorage.getItem("name");
    if (storedUser) {
      setUserName(storedUser);
      console.log("stored")
    }
  }, [location]);

  return (
    <>    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">🚀 NoteMaster</Link>

        {/* Navbar Toggler (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Authentication Buttons */}
      
        <div className="auth-buttons">
          {!localStorage.getItem('token') ? (
            <>
              <Link to="/login" className="btn btn-login mx-2">Login</Link>
              <Link to="/signup" className="btn btn-signup">Signup</Link>
            </>
          ) : (
            <>
              <span className="nav-link text-white fw-bold name">
                  👋 Welcome, {userName}!
                </span>
                     <button onClick={handlelogout} className="logout-btn">Logout</button>
                     </>
          )}
        </div>
      </div>
    </nav>
   
    </>

  );
};

export default Navbar;
