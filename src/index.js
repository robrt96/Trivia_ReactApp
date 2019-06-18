import React from "react";
import ReactDOM from "react-dom";
import QuestionCard from "./components/questionCard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <QuestionCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
