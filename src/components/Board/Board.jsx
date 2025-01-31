import { useState } from "react";
import MainMessageBox from "../MainMessageBox/MainMessageBox";
import "./Board.css";

export default function Board({ MessageBoxContent, fontStyle }) {
  const [background, setBackground] = useState(0);

  function handleNextClick() {
    setBackground((previousIndex) => (previousIndex + 1) % 7);
  }

  function handlePrevClick() {
    setBackground((previousIndex) => {
      if (previousIndex === 0) {
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
          />
        </div>
        <div className="left-message-container"></div>
      </div>
      <div onClick={handlePrevClick}>o</div>
    </>
  );
}
