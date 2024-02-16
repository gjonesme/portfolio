import React from "react";
import classes from "./NavLink.module.css";

const NavLink = (props: { link: string; children: string }) => {
  return (
    <div className={classes.NavLink}>
      <a href={props.link}>{props.children}</a>
    </div>
  );
};

export default NavLink;
