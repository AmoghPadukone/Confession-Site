import React from "react";
import classes from "./PageDivision.module.css";

const PageDivision = (props) => {
  return (
    <div className={classes.divideTextContainer}>
      <p className={classes.divideText}>
        <button className={classes.btn} onClick={props.onClick}>
          ▼ See if someone's confessed about you... 👀 ▼{" "}
        </button>
      </p>
    </div>
  );
};

export default PageDivision;
