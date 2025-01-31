import InputTextBox from "../InputTextBox/InputTextBox";
import FontSize from "../FontSize/FontSize";
import FontStyle from "../FontStyle/FontStyle";
import "./InputArea.css";
import Bowdrawing from "../../assets/Images/Bow-drawing.png";
import Bow from "../../assets/Images/Bow.png";
import Heart from "../../assets/Images/Heart illustration.png";
import Stamp from "../../assets/Images/Stamp.png";

export default function InputArea({
  onInputChange,
  textboxContent,
  onStyle1,
  onStyle2,
  onStyle3,
  onStyle4,
  onStyle5,
  onStyle6,
  onBowDrawingClick,
  onBowClick,
  onHeartClick,
  onStampClick,
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
        <div className="color-picker"></div>
      </div>
      <div className="sticker-section">
        <img src={Bowdrawing} onClick={onBowDrawingClick}></img>
        <img src={Bow} onClick={onBowClick}></img>
        <img src={Heart} onClick={onHeartClick}></img>
        <img src={Stamp} onClick={onStampClick}></img>
      </div>
    </>
  );
}
