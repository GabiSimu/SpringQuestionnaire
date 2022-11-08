import React, { useState } from "react";
import "./Chestinar.css";
import Results from "./Results/Results";

function Chestionar() {
  const intrebari = [
    {
      intrebare: "Do you like cats?",
      raspuns1: "yes",
      raspuns2: "no",
      raspuns3: "maybe",
    },
    {
      intrebare: "What is your favourite movie?",
      raspuns1: "Superman",
      raspuns2: "Titanic",
      raspuns3: "Batman",
    },
    {
      intrebare: "How old are you?",
      raspuns1: "10",
      raspuns2: "20",
      raspuns3: "30",
    },

    {
      intrebare: "What are your interests?",
      raspuns1: "Sports",
      raspuns2: "Technology",
      raspuns3: "Health",
    },
    {},
  ];

  const [showResults, setShowResults] = useState(" ");
  const [intrebariIndex, setIntrebariIndex] = useState(1);
  const [intrebare, setIntrebare] = useState("Do you like cats?");
  const [answer1, setAnswer1] = useState("yes");
  const [answer2, setAnswer2] = useState("no");
  const [answer3, setAnswer3] = useState("maybe");

  const clickHandlerAnswer1 = () => {
    const result = answer1;
    setIntrebare(intrebari[intrebariIndex].intrebare);
    setAnswer1(intrebari[intrebariIndex].raspuns1);
    setAnswer2(intrebari[intrebariIndex].raspuns2);
    setAnswer3(intrebari[intrebariIndex].raspuns3);
    setIntrebariIndex((prevQuestionIdx) => prevQuestionIdx + 1);
    console.log(result);
  };

  const clickHandlerAnswer2 = () => {
    const result = answer2;
    setIntrebare(intrebari[intrebariIndex].intrebare);
    setAnswer1(intrebari[intrebariIndex].raspuns1);
    setAnswer2(intrebari[intrebariIndex].raspuns2);
    setAnswer3(intrebari[intrebariIndex].raspuns3);

    setIntrebariIndex((prevQuestionIdx) => prevQuestionIdx + 1);
    console.log(result);
  };
  const clickHandlerAnswer3 = () => {
    const result = answer3;
    setIntrebare(intrebari[intrebariIndex].intrebare);
    setAnswer1(intrebari[intrebariIndex].raspuns1);
    setAnswer2(intrebari[intrebariIndex].raspuns2);
    setAnswer3(intrebari[intrebariIndex].raspuns3);

    setIntrebariIndex((prevQuestionIdx) => prevQuestionIdx + 1);
    console.log(result);
  };

  const clickHandlerExit = () => {
    setShowResults(() => {
      setShowResults(!showResults);
    });
  };

  if (intrebariIndex === intrebari.length)
    return (
      <div className="chestionar">
        <h2>{"End of questionnaire"}</h2>
        <button onClick={clickHandlerExit}>
          {"Click this button to see your results"}
        </button>
        <h2>{"Thank you for your participation"}</h2>
      
        <div>{!showResults && <Results />}</div>
      </div>
    );

  return (
    <div className="chestionar">
      <div>
        {" "}
        <h2>{intrebare}</h2>{" "}
      </div>
      <div>
        <button onClick={clickHandlerAnswer1}>{answer1}</button>{" "}
      </div>
      <div>
        {" "}
        <button onClick={clickHandlerAnswer2}>{answer2}</button>{" "}
      </div>
      <div>
        <button onClick={clickHandlerAnswer3}>{answer3}</button>{" "}
      </div>
    </div>
  );
}

export default Chestionar;
