import React from "react";

const NavBarRightItems = (props) => {
  return (
    <div className="topnav-right">
      <a href={props.linkA}>
        <img className="imgHeight" src={props.imageA} />
      </a>
      <a href={props.linkB}>
        <img className="imgHeight" src={props.imageB} />
      </a>
      <a href={props.linkC}>
        <img className="imgHeight" src={props.imageC} />
      </a>
      <a href={props.linkD}>
        <img className="imgHeight" src={props.imageD} />
      </a>
    </div>
  );
};

export default NavBarRightItems;
