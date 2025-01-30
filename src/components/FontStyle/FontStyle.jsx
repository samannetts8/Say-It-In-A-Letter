import StyleButton from "../StyleButton/StyleButton";

export default function FontStyle({
  onStyle1,
  onStyle2,
  onStyle3,
  onStyle4,
  onStyle5,
}) {
  return (
    <div>
      <StyleButton onStyleButtonClick={onStyle1} fontname={"Harmond"} />
      <StyleButton onStyleButtonClick={onStyle2} fontname={"impact"} />
      <StyleButton onStyleButtonClick={onStyle3} fontname={"NeneMentana"} />
      <StyleButton onStyleButtonClick={onStyle4} fontname={"GILL SANS"} />
      <StyleButton onStyleButtonClick={onStyle5} fontname={"Gill Sans Bold"} />
    </div>
  );
}
