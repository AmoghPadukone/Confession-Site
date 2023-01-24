import React from "react";
import logo from "../../assets/logo.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className={classes.logo} />
    </header>
  );
};

export default Header;
