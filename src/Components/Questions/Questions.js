import React, { useState } from "react";
import QuestionsCard from "./QuestionsCard";

function Questions() {
  const questions = [ 
    {
        question: "Do you like cats?",
        answer1: "yes",
        answer2: "no",
        answer3: "maybe"
    },
    {
        question: "What is your favourite movie?",
        answer1: "Superman",
        answer2: "Titanic",
        answer3: "Batman"
    },
    {
        question: "How old are you?",
        answer1: "10",
        answer2: "20",
        answer3: "30"
    }
  ];


  const [questionIdx, setQuestionIdx] = useState(0);
  const [question, setQuestion] = useState("");
  
  
  const clickHandler = () => {

    setQuestion(questions[questionIdx])
    setQuestionIdx((prevQuestionIdx) => prevQuestionIdx + 1)
  }


  return(
    <div className="Intrebari">
      <h2>{question.answer2}</h2>
      <button onClick={clickHandler}>answer1</button>
      <button onClick={clickHandler}>answer1</button>
      <button onClick={clickHandler}>answer1</button>
    </div>
  )
  
}

export default Questions;
