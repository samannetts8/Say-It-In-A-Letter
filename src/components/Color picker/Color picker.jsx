import { SwatchesPicker } from "react-color";

function ColorPicker({ setColor }) {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return <SwatchesPicker onChangeComplete={handleChangeComplete} />;
}

export default ColorPicker;
