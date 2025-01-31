import InputTextBox from "../InputTextBox/InputTextBox";
import FontSize from "../FontSize/FontSize";
import FontStyle from "../FontStyle/FontStyle";
import "./InputArea.css";
import ColorPicker from "../Color picker/Color picker.jsx";

export default function InputArea({
  onInputChange,
  textboxContent,
  onStyle1,
  onStyle2,
  onStyle3,
  onStyle4,
  onStyle5,
  onStyle6,
  onColorChange,
  setColor,
}) {
  return (
    <>
      <div className="form-container">
        <InputTextBox
          onInputChange={onInputChange}
          textboxContent={textboxContent}
        />
      </div>
      <div className="fontsize-container">
        <FontSize />
      </div>
      <div className="font-title-div">
        <p className="pick-a-font">Choose A Font:</p>
      </div>
      <div className="fontbutton-container">
        <FontStyle
          onStyle1={onStyle1}
          onStyle2={onStyle2}
          onStyle3={onStyle3}
          onStyle4={onStyle4}
          onStyle5={onStyle5}
          onStyle6={onStyle6}
        />
        <div className="color-picker">
          <ColorPicker setColor={setColor} />
        </div>
      </div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
      <div>Stickers go here</div>
    </>
  );
}
