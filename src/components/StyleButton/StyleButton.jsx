import "./StyleButton.css";

export default function StyleButton({ fontname, onStyleButtonClick }) {
  return (
    <button className="buttonstyle" onClick={onStyleButtonClick}>
      {fontname}
    </button>
  );
}
