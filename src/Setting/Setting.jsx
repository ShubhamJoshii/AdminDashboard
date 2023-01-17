import React, { useState } from "react";
import "./Setting.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { CirclePicker } from "react-color";
const Setting = ({ setsettingShow,settingShow ,setThemeColor ,themeColor}) => {
  // const show = false;
  const handleColorSelect = (color) => {
    setThemeColor(color.hex)
    // console.log(color.hex);
  };
  const handleCross = ()=>{
    // setsettingShow(false);
  }
  return (
    <div className="Setting">
      <div id="settingText">
        <h1>Settings </h1>
        <RiCloseCircleLine
          onClick={handleCross}
        />
      </div>
      <div id="themeOption">
        <h3>Theme Option</h3>
        <input type="radio" name="dark" id="dark" defaultChecked />
        <label htmlFor="dark">Dark</label> <br />
        <input type="radio" name="light" id="light" />
        <label htmlFor="light">Light</label>
      </div>
      <h3>Theme Colors</h3>
      <div id="themeColor">
        <CirclePicker
          color={themeColor}
          onChangeComplete={handleColorSelect}
        />
      </div>
    </div>
  );
};

export default Setting;
