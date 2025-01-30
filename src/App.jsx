import { useState } from "react";
import InputArea from "./components/InputArea/InputArea";
import OutputArea from "./components/OutputArea/OutputArea";
import "./App.css";

function App() {
  const [inputTextBox, setInputTextBox] = useState("");
  const [font, setFont] = useState("Harmond");

  function handleTextBoxChange(newTextInput) {
    setInputTextBox(newTextInput);
  }

  function changeFont() {
    setFont("impact");
  }

  function changeFont2() {
    setFont("NeneMentana");
  }

  function changeFont3() {
    setFont("Harmond");
  }

  function changeFont4() {
    setFont("impact");
  }
  function changeFont5() {
    setFont("NeneMentana");
  }

  return (
    <div>
      <InputArea
        onInputChange={handleTextBoxChange}
        textboxContent={inputTextBox}
        onStyle1={changeFont}
        onStyle2={changeFont2}
        onStyle3={changeFont3}
        onStyle4={changeFont4}
        onStyle5={changeFont5}
      />
      <OutputArea MessageBoxContent={inputTextBox} fontStyle={font} />
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
