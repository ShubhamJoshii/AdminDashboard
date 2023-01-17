import React, { useEffect, useState } from "react";
import "./Setting.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { CirclePicker } from "react-color";
const Setting = ({ setsettingShow,settingShow,setDarkLightTheme ,setThemeColor ,themeColor}) => {
  // const show = false;
  // const [DarkTheme,setDarkTheme] = useState(true)
  const handleColorSelect = (color) => {
    setThemeColor(color.hex)
    // console.log(color.hex);
  };
  const handleCross = ()=>{
    setsettingShow(false);
  }

  return (
    <div className="Setting">
      <div id="settingText">
        <h1>Settings </h1>
        <RiCloseCircleLine
          id="CROSSbtn"
          onClick={handleCross}
        />
      </div>
      <div id="themeOption">
        <h3>Theme Option</h3>
        <input type="radio" name="darkLight" id="dark" onClick={()=>{setDarkLightTheme(true)}} defaultChecked/> Dark
        <input type="radio" name="darkLight" id="light" onClick={()=>{setDarkLightTheme(false)}}  /> Light
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
