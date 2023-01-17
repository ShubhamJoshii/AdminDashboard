import React from "react";
import "./Setting.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { CirclePicker } from "react-color";
const Setting = ({setSettingShow,setDarkLightTheme ,setThemeColor ,themeColor}) => {
  const handleColorSelect = (color) => {
    setThemeColor(color.hex)
  };
  
  return (
    <div className="Setting">
      <div id="settingText">
        <h1>Settings </h1>
        <RiCloseCircleLine
          id="CROSSbtn"
          onClick={()=>{setSettingShow(false)}}
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
