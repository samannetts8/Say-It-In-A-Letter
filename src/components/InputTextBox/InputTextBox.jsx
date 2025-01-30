import "./InputTextBox.css";

export default function InputTextBox({ onInputChange, textboxContent }) {
  return (
    <textarea
      className="no-border-textarea"
      type="text"
      id="fname"
      name="fname"
      rows="4" // Set the height of the textarea
      cols="35"
      placeholder="Type your message here..."
      onChange={(event) => {
        onInputChange(event.target.value);
      }}
      value={textboxContent}
    ></textarea>
  );
}
