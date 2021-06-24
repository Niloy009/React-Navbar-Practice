import React from "react";

const LogoTitle = (props) => {
  return (
    <a href={props.link}>
      <img src={props.image} className="imgHeight" />
      <span
        style={{
          paddingLeft: "5px",
          position: "absolute",
          paddingTop: "6px",
        }}
      >
        {props.name}
      </span>
    </a>
  );
};

export default LogoTitle;
