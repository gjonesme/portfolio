import React from "react";
import classes from "./ExperienceSummary.module.css";

const ExperienceSummary = (props: {
  title?: string;
  company?: string;
  companyLink?: string;
  range: string;
  children?: any;
}) => {
  return (
    <div className={classes.ExperienceSummaryContainer}>
      <h2 className={classes.Title}>
        {props.title ? props.title : "Title Here"}

        <span className={classes.Company}>
          <a
            href={props.companyLink}
            target="_blank"
            rel="noreferrer"
          >{`@ ${props.company}`}</a>
        </span>
      </h2>
      <p className={classes.Duration}>{props.range}</p>
      {props.children}
    </div>
  );
};

export default ExperienceSummary;
