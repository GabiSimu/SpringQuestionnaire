import React, {useState} from "react"
import './App.css';
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import Questions from "./Components/Questions/Questions";

function App() {

  const [showNewQuestionnaire, setShowNewQuestionnaire] = useState(false);

  const clickHandlerNewQuestionnaire = () => {
    setShowNewQuestionnaire(() => {
      setShowNewQuestionnaire(!showNewQuestionnaire);
    });
  };

  

  return (
    <div>
   
        <button className="button" onClick={clickHandlerNewQuestionnaire}>
          <b>New questionnaire</b>
        </button>
        {showNewQuestionnaire && <Questionnaire/>}
  
        
    </div>
  );
}

export default App;
