import React from "react";
import "./style.css";
import logo from "../../images/logo192.png";
import google from "../../images/google.png";
import youtube from "../../images/youtube.png";
import gmail from "../../images/gmail.jpg";
import fb from "../../images/facebook.jpg";

class NavBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <div className="topnav-centered">
          <input placeholder="Search" />
        </div>

        <a href="#news">
          <img src={logo} className="imgHeight" />
          <span
            style={{
              paddingLeft: "5px",
              position: "absolute",
              paddingTop: "6px",
            }}
          >
            React
          </span>
        </a>

        <div className="topnav-right">
          <a href="#search">
            <img className="imgHeight" src={youtube} />
          </a>
          <a href="#about">
            <img className="imgHeight" src={gmail} />
          </a>
          <a href="#about">
            <img className="imgHeight" src={fb} />
          </a>
          <a href="#about">
            <img className="imgHeight" src={google} />
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;
