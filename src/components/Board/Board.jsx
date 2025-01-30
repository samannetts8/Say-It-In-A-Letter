import MainMessageBox from "../MainMessageBox/MainMessageBox";
import "./Board.css";

export default function Board({ MessageBoxContent, fontStyle }) {
  return (
    <>
      <div>o</div>
      <div className="postcard-container">
        <div className="right-message-container">
          <MainMessageBox
            MessageBoxContent={MessageBoxContent}
            fontStyle={fontStyle}
          />
        </div>
        <div className="left-message-container"></div>
      </div>
      <div>o</div>
    </>
  );
}
