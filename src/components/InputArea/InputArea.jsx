import InputTextBox from "../InputTextBox/InputTextBox";
import FontSize from "../FontSize/FontSize";
import FontStyle from "../FontStyle/FontStyle";
import "./InputArea.css";

export default function InputArea({
  onInputChange,
  textboxContent,
  onStyle1,
  onStyle2,
  onStyle3,
  onStyle4,
  onStyle5,
  onStyle6,
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
      <div className="fontbutton-container">
        <FontStyle
          onStyle1={onStyle1}
          onStyle2={onStyle2}
          onStyle3={onStyle3}
          onStyle4={onStyle4}
          onStyle5={onStyle5}
          onStyle6={onStyle6}
        />
      </div>
    </>
  );
}
