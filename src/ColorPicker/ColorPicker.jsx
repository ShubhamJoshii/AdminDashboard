import React, { useState } from "react";
import "./ColorPicker.css";
import { SketchPicker, CirclePicker } from "react-color";
const ColorPicker = () => {
  const [colorPicked, setcolorPicked] = useState("red");
  const handleColorSelect = (color) => {
    setcolorPicked(color.hex);
  };
  return (
    <div id="ColorPicker">
      <h3>App</h3>
      <h2>Color Picker</h2>
      <div id="color" style={{ backgroundColor: colorPicked }}></div>
      <div className="ColorPickers">
        <h1>Inline Color Pallete</h1>
        <h1>Inline Color Picker</h1>
      
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
