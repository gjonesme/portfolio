import React from "react";
import classes from "./HamburgerExpanded.module.css";
import NavLink from "../components/NavLink";

const HamburgerExpanded = () => {
  const onClickHandler = () => {};
  return (
    <div className={classes.HamburgerExpanded}>
      <NavLink link="#about">About</NavLink>
      <NavLink link="#experience">Experience</NavLink>
      <NavLink link="#projects">Projects</NavLink>
      <NavLink link="#contact">Contact</NavLink>
      {/* <ul>
        <li>About</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul> */}
    </div>
  );
};

export default HamburgerExpanded;
