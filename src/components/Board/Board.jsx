import { useState } from "react";
import MainMessageBox from "../MainMessageBox/MainMessageBox";
import "./Board.css";
import Bowdrawing from "../../assets/Images/Bow-drawing.png";
import Bow from "../../assets/Images/Bow.png";
import Heart from "../../assets/Images/Heart illustration.png";
import Stamp from "../../assets/Images/Stamp.png";

const stickers = {
  Bowdrawing,
  Bow,
  Heart,
  Stamp,
};



export default function Board({ MessageBoxContent, fontStyle, sticker, color }) {
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
      <div onClick={handleNextClick}>o</div>
      <div className={`postcard-container background-${background}`}>
        <div className="right-message-container">
          <MainMessageBox
            MessageBoxContent={MessageBoxContent}
            fontStyle={fontStyle}
            color={color}
          />
        </div>
        <div className="left-message-container">
          <img src={stickers[sticker]} alt={sticker} />
        </div>
      </div>
      <div onClick={handlePrevClick}>o</div>
    </>
  );
}
