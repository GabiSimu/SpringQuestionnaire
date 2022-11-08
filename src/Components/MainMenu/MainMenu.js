import Chestionar from "../Chestionar/Chestionar";
import React, { useState } from "react";
import "./MainMenu.css";

function MainMenu() {
  const url = "http://locahost:8080/questions";

  //    const getQuestions = axios.get(url)

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

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

  const [showChestionar, setShowChestionar] = useState(false);

  const clickHandlerStart = () => {
    setShowChestionar(() => {
      setShowChestionar(!showChestionar);
    });
  };

  return (
    <div className="mainmenu">
      <div>
        <label>Name</label>
      </div>
      <div>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
      </div>
      <div>
        <label>Email</label>
      </div>
      <div>
        <input type="text" value={enteredEmail} onChange={emailChangeHandler} />
      </div>
      <div>
        <button onClick={clickHandlerSaveData}>Save data</button>
      </div>
      <button onClick={clickHandlerStart}>Start</button>
      <div>{showChestionar && <Chestionar />}</div>
    </div>
  );
}

export default MainMenu;
