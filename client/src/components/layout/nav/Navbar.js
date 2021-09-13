import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (auth.user != null) {
      setUserId(auth.user._id);
    }
  }, [auth]);

  return (
    <div>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code"></i> DevConnector
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/profiles">Developers</Link>
          </li>
          {!auth.isAuthenticated && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
          {auth.isAuthenticated && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          {auth.isAuthenticated && (
            <li>
              <Link to="/dashboard">Post</Link>
            </li>
          )}
          {auth.isAuthenticated && (
            <li>
              <a href={`/api/auth/logout/${userId}`}>Logout</a>
            </li>
          )}
          {!auth.isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
