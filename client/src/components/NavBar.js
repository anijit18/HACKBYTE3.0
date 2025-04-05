import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Skill Exchange</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" style={styles.link}>Profile</Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "#282c34",
    color: "white",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  button: {
    background: "#61dafb",
    border: "none",
    padding: "0.4rem 0.8rem",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Navbar;
