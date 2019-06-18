import React, { useState, useEffect } from "react";
import axios from "axios";

function QuestionCard() {
  const [questions, SetQuestions] = useState({ results: {} });
  const [answer, setAnswer] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  function APICall() {
    axios
      .get("https://opentdb.com/api.php?amount=1&type=boolean")
      .then(function(response) {
        SetQuestions(response.data.results[0]);
        console.log(response.data.results[0]);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  useEffect(() => {
    APICall();
  }, []);

  const answerChoice = choice => {
    setAnswer(choice);

    if (answer === questions.correct_answer) {
      console.log("correct");
      setModalOpen(true);
    } else {
      console.log("wrong");
      setModalOpen(true);
      APICall();
    }
  };

  return (
    <>
      {isModalOpen ? (
        <Modal
          whatAnswer={answer}
          ClickFunction={() => setModalOpen(!isModalOpen)}
        />
      ) : (
        <div />
      )}

      <div className="appContainer">
        <h1>Trivia</h1>
        <div className="questionArea">
          <span className="categoryTag">{questions.category}</span>
          <h2 className="questionAnimation">{questions.question}</h2>
        </div>
        <div className="answerArea">
          <span className="answserButton" onClick={() => answerChoice("True")}>
            Yes
          </span>
          <span className="answserButton" onClick={() => answerChoice("False")}>
            No
          </span>
        </div>
      </div>
    </>
  );
}

function Modal(props) {
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <h1>{props.whatAnswer}</h1>
        <span onClick={props.ClickFunction}>close</span>
      </div>
    </div>
  );
}

export default QuestionCard;
