import React from "react";
import "./Header.css";
import blueStacksLogo from "../images/bluestackslogo.png";

const Header = (props) => {
  return (
    <div className="header">
      <img className="logo" alt="bluestackslogo" src={blueStacksLogo} />
      <select className="dropdown" onChange={props.handleLanguage}>
        <option name="language" value="EN">
          English
        </option>
        <option name="language" value="DE">
          German
        </option>
      </select>
    </div>
  );
};

export default Header;
