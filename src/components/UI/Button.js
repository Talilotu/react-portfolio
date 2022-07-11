import React from "react";

const Button = (props) => {
  const classes = "button " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Button;
