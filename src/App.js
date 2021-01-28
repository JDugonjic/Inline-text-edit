import { useState } from "react";
import "./App.css";
import InlineEdit from "./InlineEdit";

function App() {
  const [storedText, setStoredText] = useState("Stored text");

  return (
    <div className="app">
      <div className="app__container">
        <InlineEdit
          text={storedText}
          onSetText={(text) => setStoredText(text)}
        />
      </div>
    </div>
  );
}

export default App;
