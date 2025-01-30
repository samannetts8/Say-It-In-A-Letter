import { useState } from "react";
import InputArea from "./components/InputArea/InputArea";
import OutputArea from "./components/OutputArea/OutputArea";
import "./App.css";

function App() {
  const [inputTextBox, setInputTextBox] = useState("");

  function handleTextBoxChange(newTextInput) {
    setInputTextBox(newTextInput);
  }

  return (
    <div>
      <InputArea onInputChange={handleTextBoxChange} textboxContent={inputTextBox} />
      <OutputArea MessageBoxContent={inputTextBox}/>
    </div>
  );
}

export default App;
