import MainMessageBox from "../MainMessageBox/MainMessageBox";
import "./Board.css";

export default function Board({ MessageBoxContent, fontStyle }) {
  return (
    <>
      <div>o</div>
      <div className="postcard-container">
        <MainMessageBox
          MessageBoxContent={MessageBoxContent}
          fontStyle={fontStyle}
        />
      </div>
      <div>o</div>
    </>
  );
}
