export default function InputTextBox({ onInputChange, textboxContent }) {
  return (
    <input
      type="text"
      id="fname"
      name="fname"
      onChange={(event) => {
        onInputChange(event.target.value);
      }}
      value={textboxContent}
    ></input>
  );
}
