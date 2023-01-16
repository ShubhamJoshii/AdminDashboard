import React, { useState } from "react";
import "./ColorPicker.css";
import pen from "./pen.png";
import {AiOutlineCopy} from "react-icons/ai"
import { SketchPicker, CirclePicker } from "react-color";
const ColorPicker = () => {
  const [colorPicked, setcolorPicked] = useState("#ff0101");
  const handleColorSelect = (color) => {
    setcolorPicked(color.hex);
  };
  const copyClipboard = ()=>{
    let copyText = document.getElementById("colorTextShow");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied Color " + copyText.value);
  }
  return (
    <div id="ColorPicker">
      <h3>App</h3>
      <h2>Color Picker</h2>
      <div id="color" style={{ backgroundColor: colorPicked }}>
        <img src={pen} alt="PenImg" width="450px" />
      </div>
      <p>
        <input
          value={colorPicked}
          id="colorTextShow"
          onChange={(e) => {
            setcolorPicked(e.target.value);
          }}
        ></input>
        <AiOutlineCopy onClick={copyClipboard}/>
      </p>
      <div className="ColorPickers">
        <h1>Inline Pallete</h1>
        <h1>Inline Picker</h1>
      </div>
      <div className="ColorPickers">
        <CirclePicker
          color={colorPicked}
          onChangeComplete={handleColorSelect}
        />
        <SketchPicker
          color={colorPicked}
          onChangeComplete={handleColorSelect}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
