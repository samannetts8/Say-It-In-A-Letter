import { useState } from "react";
import InputArea from "./components/InputArea/InputArea";
import OutputArea from "./components/OutputArea/OutputArea";
import "./App.css";

function App() {
  const [inputTextBox, setInputTextBox] = useState("");
  const [font, setFont] = useState("one");
  const [color, setColor] = useState("#000");
  const [sticker, setSticker] = useState("");
  const [fontSizeAdjust, setfontSizeAdjust] = useState(0);

  function decreaseFontSize() {
    setfontSizeAdjust((previousSize) => previousSize - 1);
  }

  function increaseFontSize() {
    setfontSizeAdjust((previousSize) => previousSize + 1);
  }

  function changebowdrawingsticker() {
    setSticker("Bowdrawing");
  }

  function changebowsticker() {
    setSticker("Bow");
  }

  function changeheartsticker() {
    setSticker("Heart");
  }

  function changestampsticker() {
    setSticker("Stamp");
  }

  function handleTextBoxChange(newTextInput) {
    setInputTextBox(newTextInput);
  }

  function changeFont() {
    setFont("two");
  }

  function changeFont2() {
    setFont("three");
  }

  function changeFont3() {
    setFont("four");
  }

  function changeFont4() {
    setFont("five");
  }
  function changeFont5() {
    setFont("six");
  }
  function changeFont6() {
    setFont("seven");
  }

  return (
    <div className="main-container">
      <div className="input-container">
        <InputArea
          setColor={setColor}
          onInputChange={handleTextBoxChange}
          textboxContent={inputTextBox}
          onStyle1={changeFont}
          onStyle2={changeFont2}
          onStyle3={changeFont3}
          onStyle4={changeFont4}
          onStyle5={changeFont5}
          onStyle6={changeFont6}
          onBowDrawingClick={changebowdrawingsticker}
          onBowClick={changebowsticker}
          onHeartClick={changeheartsticker}
          onStampClick={changestampsticker}
          onDecreaseFontSize={decreaseFontSize}
          onIncreaseFontSize={increaseFontSize}
          fontSize={fontSizeAdjust}
        />
      </div>
      <div className="output-container">
        <OutputArea
          MessageBoxContent={inputTextBox}
          fontStyle={font}
          color={color}
          sticker={sticker}
          fontSizeAdjust={fontSizeAdjust}
        />
      </div>
    </div>
  );
}

export default App;

// "Harmond"}/>
//       <StyleButton onStyleButtonClick={onStyle2} fontname={"impact"} />
//       <StyleButton onStyleButtonClick={onStyle3} fontname={"NeneMentana"} />
//       <StyleButton onStyleButtonClick={onStyle4} fontname={"GILL SANS"} />
//       <StyleButton onStyleButtonClick={onStyle5} fontname={"Gill Sans Bold"} />
//     </div>
