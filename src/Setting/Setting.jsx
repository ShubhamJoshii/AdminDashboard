import React from "react";
import "./Setting.css";
import {RiCloseCircleLine} from "react-icons/ri"
const Setting = ({setsettingShow}) => {
  return (
    <div className="Setting">
    <div id="settingText">
      <h1>Settings </h1>
      <RiCloseCircleLine onClick={()=>{
        setsettingShow(false) 
      }}/>
    </div>
      <div id="themeOption">
        <h3>Theme Option</h3>
        <input type="radio" name="dark" id="dark" defaultChecked/>
        <label htmlFor="dark">Dark</label> <br />
        <input type="radio" name="light" id="light" />
        <label htmlFor="light">Light</label>
      </div>
    <h3>Theme Colors</h3>
      <div id="themeColor">
        <div id="color1"></div>
        <div id="color2"></div>
        <div id="color3"></div>
        <div id="color4"></div>
        <div id="color5"></div>
        <div id="color6"></div>
      </div>
    </div>
  );
};

export default Setting;
