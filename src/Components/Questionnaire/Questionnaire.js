import React, { useState } from "react";
// import axios from "axios";
import Questions from "../Questions/Questions";
import "./Questionnaire.css";

function Questionnaire() {
  const url = "http://locahost:8080/questions";

  //    const getQuestions = axios.get(url)

  const questions = [
    {
      question: "Do you like cats?",
      answer1: "yes",
      answer2: "no",
      answer3: "maybe",
    },
    {
      question: "What is your favourite movie?",
      answer1: "Superman",
      answer2: "Titanic",
      answer3: "Batman",
    },
    {
      question: "How old are you?",
      answer1: "10",
      answer2: "20",
      answer3: "30",
    },
  ];

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const [questionIdx, setQuestionIdx] = useState(0);
  const [question, setQuestion] = useState("");

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
    setQuestion(questions[questionIdx]);
    setQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
    if (questionIdx === questions.length) setQuestion("End of questionnaire");
  };

  const clickHandler = () => {
    setQuestion(questions[questionIdx]);
    setQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1);
    if (questionIdx === questions.length) setQuestion("End of questionnaire");
  };

  return (
    <div className="questionnaire">
      <div>
        <label>Name</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <label>Email</label>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
        <button onClick={clickHandlerSaveData}>Save data</button>
        <button onClick={clickHandlerStart}>Start</button>
      </div>
      <div>
      {question.question}
      <button onClick={clickHandler}>{question.answer1}</button>
      <button onClick={clickHandler}>{question.answer2}</button>
      <button onClick={clickHandler}>{question.answer3}</button>
    </div>
    </div>
  );
}

export default Questionnaire;
