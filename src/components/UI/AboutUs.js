import React from "react";

import classes from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.heading}> 📌 About this Website</h1>
      <div className={classes.headingLine}></div>
      <ul className={classes.text1}>
        <li>
          A simple Confessions Website where you can post small snippets of
          confessions with full anonymity You are free to post any kind of
          confessions you wish as long as the confessions you post are not
          directly/indirectly hurting anyone.{" "}
        </li>
        <li>
          <p>
            Plus to add another level of anonymity to every confessions, the
            posts are ordered randomly{" "}
          </p>

          <div className={classes.subtext}>
            ---which definetly is a feature and not a bug (⌐■_■)
          </div>
        </li>
      </ul>
      <hr />
      <h1 className={classes.heading2}>📌 Getting Started:</h1>
      <ol className={classes.text2}>
        <li>
          The simple and minimal design of this website makes posting and
          viewing confessions as easy as it can get.
        </li>
        <li>All you have to do is click on the Make Confessions box</li>
        <li>
          Make up a PsuedoName, write up your consise confession and hit submit
        </li>
        <li>And thats pretty much all you have to do :D </li>
      </ol>

      <h2 className={classes.HaveFun}>Have fun (⁠ﾉ⁠◕⁠ヮ⁠◕⁠)⁠ﾉ⁠*⁠.⁠✧ </h2>
    </div>
  );
};

export default AboutUs;
