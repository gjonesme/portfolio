import React from "react";
import classes from "./NavLink.module.css";

const NavLink = (props: {
  link: string;
  activeMenuSetter?(): void;
  children: string;
}) => {
  return (
    <div className={classes.NavLink}>
      <a href={props.link} onClick={props.activeMenuSetter}>
        {props.children}
      </a>
    </div>
  );
};

export default NavLink;
