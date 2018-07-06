import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="App">
      <h1>Show / Hide panel example</h1>
      <Panel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
