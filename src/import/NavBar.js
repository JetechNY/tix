import React from "react";
// import { NavDropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
// import Dropdown from "./Dropdown"

function NavBar({setCurrentUser}) {
  const history = useHistory();

  const logout =()=> {
    setCurrentUser(null);
    history.push('/login');
  }

  return (
    <div className="navbar" id="navbar">
      <span className="navbar-links">
        <header>
          <div>
            <NavLink to="/login">Login</NavLink>
            <br></br>
            <NavLink to="/">Home</NavLink>
            <br></br>
            <NavLink to="/tickets">Tickets</NavLink>
            <br></br>
            <NavLink to="/signup">Sign Up</NavLink>
            <br></br>
            <button className="logout" onClick={logout}>Log Out</button>
          </div>
        </header>
      </span>
    </div>
  );
}

export default NavBar;
