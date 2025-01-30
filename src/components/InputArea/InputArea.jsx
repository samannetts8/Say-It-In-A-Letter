import InputTextBox from "../InputTextBox/InputTextBox";
import FontSize from "../FontSize/FontSize";
import FontStyle from "../FontStyle/FontStyle";

export default function InputArea({
  onInputChange,
  textboxContent,
  onStyle1,
  onStyle2,
  onStyle3,
  onStyle4,
  onStyle5,
}) {
  return (
    <div>
      <InputTextBox
        onInputChange={onInputChange}
        textboxContent={textboxContent}
      />
      <FontSize />
      <FontStyle
        onStyle1={onStyle1}
        onStyle2={onStyle2}
        onStyle3={onStyle3}
        onStyle4={onStyle4}
        onStyle5={onStyle5}
      />
    </div>
  );
}
