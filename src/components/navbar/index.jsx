import React from "react";
import "./style.css";
import logo from "../../images/logo192.png";
import google from "../../images/google.png";
import youtube from "../../images/youtube.png";
import gmail from "../../images/gmail.jpg";
import fb from "../../images/facebook.jpg";

import Search from "./searchBox";
import LogoTitle from "./logotitle";
import NavBarRightItems from "./navbarRightItems";

class NavBar extends React.Component {
  render() {
    return (
      <div className="topnav">
        <Search />

        <LogoTitle name="React" image={logo} link="https://reactjs.org/" />

        <NavBarRightItems
          linkA="https://www.google.com/"
          imageA={google}
          linkB="https://www.youtube.com/"
          imageB={youtube}
          linkC="https://www.google.com/intl/bn/gmail/about"
          imageC={gmail}
          linkD="https://www.facebook.com"
          imageD={fb}
        />
      </div>
    );
  }
}

export default NavBar;
