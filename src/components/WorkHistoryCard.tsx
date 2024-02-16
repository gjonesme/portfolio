import React from "react";
import classes from "./WorkHistoryCard.module.css";

const WorkHistoryCard = () => {
  return (
    <div>
      <span className={classes.TimeFrame}>2016-present</span>
      <div className={classes.Content}>
        <div className={classes.Header}></div>
        <p className={classes.Overview}></p>
        <div className={classes.Links}></div>
        <div className={classes.Skills}></div>
      </div>
    </div>
  );
};

export default WorkHistoryCard;
