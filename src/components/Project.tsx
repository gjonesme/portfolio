import React from "react";
import classes from "./Project.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = (props: {
  projectName: string;
  technologies: string[];
  imageSource?: string;
  gitLink?: string;
  children?: any;
}) => {
  return (
    <div className={classes.Project}>
      <div className={classes.Content}>
        <h3>{props.projectName}</h3>
        <p className={classes.Summary}>{props.children}</p>

        <ul className={classes.Technologies}>
          {props.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <a
          className={classes.GitHubIcon}
          href={props.gitLink}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon></GitHubIcon>
        </a>
      </div>
      <div className={classes.ImageContainer}>
        <a href={props.gitLink} target="_blank">
          <img
            className={classes.Screenshot}
            alt="project screenshot"
            src={props.imageSource}
            rel="noreferrer"
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
