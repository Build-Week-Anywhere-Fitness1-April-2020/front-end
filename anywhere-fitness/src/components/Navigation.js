import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const [nav, setNav] = useState(true);

  if (!nav) {
    return (
      <div className="navLinksInstructor">
        <NavLink to="/Profile">Profile</NavLink>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <NavLink to="/CreateClass">Create a class</NavLink>
        <NavLink to="/ManageClass">Manage Classes</NavLink>
      </div>
    );
  }

  return (
    <nav>
      <div className="navigation navSite">
        <div>
          <NavLink to="/Classes">
            <h1>Anywhere Fitness</h1>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>

      <div className="navLinksUser">
        <NavLink to="/Profile">Profile</NavLink>
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <NavLink to="/ClassType">Class Type</NavLink>
        <NavLink to="/ClassDuration">Class Duration</NavLink>
        <NavLink to="/ClassDate">Class Date</NavLink>
        <NavLink to="/ClassTime">Class Time</NavLink>
        <NavLink to="/ClassLevel">Class Level</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
