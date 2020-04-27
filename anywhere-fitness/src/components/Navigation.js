import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <NavLink to="/">Anywhere Fitness</NavLink>
    </div>
  );
};

export default Navigation;
