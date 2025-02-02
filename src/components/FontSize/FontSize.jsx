import "./FontSize.css";
export default function FontSize({
  onDecreaseFontSize,
  onIncreaseFontSize,
  fontSize,
}) {
  return (
    <div className="font-size-container">
      <p>FONT SIZE :</p>
      <button onClick={onDecreaseFontSize} className="font-size-button">
        -
      </button>
      <p>{fontSize}</p>
      <button onClick={onIncreaseFontSize} className="font-size-button">
        +
      </button>
    </div>
  );
}
