import React, { useState } from "react";
// import axios from "axios";
import Questions from "../Questions/Questions";
import "./Questionnaire.css"

function Questionnaire() {
  const url = "http://locahost:8080/questions";

  //    const getQuestions = axios.get(url)

  const questions = [
    "Do you like cats?",
    "What is your favourite movie?",
    "How old are you?",
    "What is your favourite sport?",
  ];

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionIdx, setQuestionIdx] = useState(0);

  const questionsLength = questions.length;

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const clickHandlerSaveData = (event) => {
    event.preventDefault();

    const clientData = {
      name: enteredName,
      email: enteredEmail,
    };

    console.log(clientData);
  };

  const clickHandlerStart = () => {
    if (questionIdx < questionsLength) {
      setCurrentQuestion(questions[questionIdx]);
      setQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
    }
    if (questionIdx === questionsLength)
      setCurrentQuestion("End of questionnaire");
  };

  return (
    <div>
    <div className="questionnaire">
      <label>Name</label>
      <input type="text" value={enteredName} onChange={nameChangeHandler} />
      <label>Email</label>
      <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      <button onClick={clickHandlerSaveData}>Save data</button>
      <button className="questionnaire" onClick={clickHandlerStart}>Start</button>
      {<Questions/>}
    </div>
    </div>
  );
}

export default Questionnaire;
