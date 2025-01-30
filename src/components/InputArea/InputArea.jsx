import InputTextBox from "../InputTextBox/InputTextBox";
import FontSize from "../FontSize/FontSize";
import FontStyle from "../FontStyle/FontStyle";

export default function InputArea({ onInputChange, textboxContent }) {
  return (
    <div>
      <InputTextBox
        onInputChange={onInputChange}
        textboxContent={textboxContent}
      />
      <FontSize />
      <FontStyle />
    </div>
  );
}
