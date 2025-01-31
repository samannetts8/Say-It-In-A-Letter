import { useEffect, useRef } from "react";
import { SwatchesPicker } from "react-color";

import "./Colorpicker.css";

function ColorPicker({ setColor }) {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return <SwatchesPicker onChangeComplete={handleChangeComplete} />;
}

export default ColorPicker;
