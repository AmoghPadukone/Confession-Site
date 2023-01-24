import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>
        For any Complaints/Queries:{" "}
        <a href="mailto:someone@example.com">something@email.com</a>
      </p>
      <p> DevTrack Club - WebDev Team21 &#169; {year} </p>
    </footer>
  );
};

export default Footer;
