import React, {useState} from "react";
import "./Chestinar.css";


function Chestionar() {

  const intrebari = [ 
    {
        intrebare: "Do you like cats?",
        raspuns1: "yes",
        raspuns2: "no",
        raspuns3: "maybe"
    },
    {
      intrebare: "What is your favourite movie?",
      raspuns1: "Superman",
      raspuns2: "Titanic",
      raspuns3: "Batman"
    },
    {
      intrebare: "How old are you?",
      raspuns1: "10",
      raspuns2: "20",
      raspuns3: "30"
    },

    {
      intrebare: "What are your interests?",
      raspuns1: "Sports",
      raspuns2: "Technology",
      raspuns3: "Health"
    }
  ];

  const [intrebariIndex, setIntrebariIndex] = useState(1);
  const [intrebare, setIntrebare] = useState("Do you like cats?");
  const [answer1, setAnswer1] = useState("yes");
  const [answer2, setAnswer2] = useState("no");
  const [answer3, setAnswer3] = useState("maybe");
  
  
  const clickHandler = () => {

    setIntrebare(intrebari[intrebariIndex].intrebare)
    setAnswer1(intrebari[intrebariIndex].raspuns1)
    setAnswer2(intrebari[intrebariIndex].raspuns2)
    setAnswer3(intrebari[intrebariIndex].raspuns3)
    setIntrebariIndex((prevQuestionIdx) => prevQuestionIdx + 1)
    if (intrebariIndex === intrebari.length)
    {
      setIntrebare("");
      setAnswer1("End of questionnaire")
      setAnswer2("Thank you for your participation")
      setAnswer3("Press any button to exit")
    }
  }




  return (
    <div className="chestionar">
      <div>
        {" "}
        <h2>{intrebare}</h2>{" "}
      </div>
      <div>
        <button onClick={clickHandler}>{answer1}</button>{" "}
      </div>
      <div>
        {" "}
        <button onClick={clickHandler}>{answer2}</button>{" "}
      </div>
      <div>
        <button onClick={clickHandler}>{answer3}</button>{" "}
      </div>
    </div>
  );
}

export default Chestionar;
