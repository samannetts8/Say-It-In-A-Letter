import MainMessageBox from "../MainMessageBox/MainMessageBox";
import "./Board.css";

export default function Board({ MessageBoxContent, fontStyle, color }) {
  return (
    <>
      <div>o</div>
      <div className="postcard-container">
        <div className="right-message-container">
          <MainMessageBox
            MessageBoxContent={MessageBoxContent}
            fontStyle={fontStyle}
            color={color}
          />
        </div>
        <div className="left-message-container"></div>
      </div>
      <div>o</div>
    </>
  );
}
