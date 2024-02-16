import React from "react";
import classes from "./Sidebar.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <a href="https://github.com/gjonesme" target="_blank">
        <GitHubIcon></GitHubIcon>
      </a>
      <a
        href="https://www.linkedin.com/in/gary-jones-318b9758/"
        target="_blank"
      >
        <LinkedInIcon></LinkedInIcon>
      </a>
    </div>
  );
};

export default Sidebar;
