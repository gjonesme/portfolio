import React from "react";
import classes from "./Employer.module.css";

interface EmployerProps {
  title: string;
  index: number;
  handleActiveExperience(experienceIndex: number): void;
  activeIndex: number;
}

const Employer = (props: EmployerProps) => {
  const onClickHandler = () => {
    props.handleActiveExperience(props.index);
  };
  return (
    <button
      className={`${classes.StyledButton} ${classes.Employer} ${
        props.activeIndex === props.index && classes.activated
      }`}
      onClick={onClickHandler}
    >
      <span>{props.title}</span>
    </button>
  );
};

export default Employer;
