import { useState } from "react";
import InputArea from "./components/InputArea/InputArea";
import OutputArea from "./components/OutputArea/OutputArea";
import "./App.css";

function App() {
  const [inputTextBox, setInputTextBox] = useState("");
  const [font, setFont] = useState("one");

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
          onInputChange={handleTextBoxChange}
          textboxContent={inputTextBox}
          onStyle1={changeFont}
          onStyle2={changeFont2}
          onStyle3={changeFont3}
          onStyle4={changeFont4}
          onStyle5={changeFont5}
          onStyle6={changeFont6}
        />
      </div>
      <div className="output-container">
        <OutputArea MessageBoxContent={inputTextBox} fontStyle={font} />
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
