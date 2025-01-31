import Title from "../Title/Title";
import Board from "../Board/Board";
import "./OutputArea.css";

export default function OutputArea({
  MessageBoxContent,
  fontStyle,
  color,
  sticker,
  fontSizeAdjust,
}) {
  return (
    <>
      <div className="header-container">
        <Title />
      </div>
      <div className="board-container">
        <Board
          MessageBoxContent={MessageBoxContent}
          fontStyle={fontStyle}
          color={color}
          sticker={sticker}
          fontSizeAdjust={fontSizeAdjust}
        />
      </div>
    </>
  );
}
