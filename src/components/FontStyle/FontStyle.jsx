import StyleButton from "../StyleButton/StyleButton";
import "./FontStyle.css";

export default function FontStyle({
  onStyle1,
  onStyle2,
  onStyle3,
  onStyle4,
  onStyle5,
  onStyle6,
}) {
  return (
    <>
      <div className={"HomemadeApple-button"}>
        <StyleButton
          onStyleButtonClick={onStyle1}
          fontname={"Homemade Apple"}
        />
      </div>
      <div className={"Farewell"}>
        <StyleButton onStyleButtonClick={onStyle2} fontname={"Farewell"} />
      </div>
      <div className={"soul-gate"}>
        <StyleButton onStyleButtonClick={onStyle3} fontname={"Soul Gate"} />
      </div>
      <div className={"scriptina"}>
        <StyleButton onStyleButtonClick={onStyle4} fontname={"Scriptina"} />
      </div>
      <div className={"beth-ellen"}>
        <StyleButton onStyleButtonClick={onStyle5} fontname={"Beth Ellen"} />
      </div>
      <div className={"Gill-Sans"}>
        <StyleButton onStyleButtonClick={onStyle6} fontname={"Gill Sans"} />
      </div>
    </>
  );
}
