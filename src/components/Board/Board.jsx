import { useState } from "react";
import MainMessageBox from "../MainMessageBox/MainMessageBox";
import "./Board.css";
import Bowdrawing from "../../assets/Images/Bow-drawing.png";
import Bow from "../../assets/Images/Bow.png";
import Heart from "../../assets/Images/Heart illustration.png";
import Stamp from "../../assets/Images/Stamp.png";
import rightheart from "../../assets/Images/heart-arrow-right.png";
import leftheart from "../../assets/Images/hear-arrow-left.png";

const stickers = {
  Bowdrawing,
  Bow,
  Heart,
  Stamp,
};

export default function Board({
  MessageBoxContent,
  fontStyle,
  sticker,
  color,
  fontSizeAdjust,
}) {
  const [background, setBackground] = useState(0);

  function handleNextClick() {
    setBackground((previousIndex) => (previousIndex + 1) % 7);
  }

  function handlePrevClick() {
    setBackground((previousIndex) => {
      if (!previousIndex) {
        return 6;
      } else {
        return previousIndex - 1;
      }
    });
  }

  return (
    <>
      <div onClick={handleNextClick} className="heart-container-left">
        <img src={leftheart} />
      </div>
      <div className={`postcard-container background-${background}`}>
        <div className="right-message-container">
          <MainMessageBox
            MessageBoxContent={MessageBoxContent}
            fontStyle={fontStyle}
            color={color}
            fontSizeAdjust={fontSizeAdjust}
          />
        </div>
        <div className="left-message-container">
          <div className="left-sticker-container">
            <img src={stickers[sticker]} alt={sticker} />
          </div>
        </div>
      </div>
      <div onClick={handlePrevClick} className="heart-container">
        <img src={rightheart} />
      </div>
    </>
  );
}
