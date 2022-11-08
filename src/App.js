import React, { useState } from "react";
import "./App.css";
import Chestionar from "./Components/Chestionar/Chestionar";
import MainMenu from "./Components/MainMenu/MainMenu";

function App() {
  const [showMainMenu, setShowMainMenu] = useState(false);

  const clickHandlerMainMenu = () => {
    setShowMainMenu(() => {
      setShowMainMenu(!showMainMenu);
    });
  };

  return (
    <div>
      <button className="button" onClick={clickHandlerMainMenu}>
        <b>Main Menu</b>
      </button>
      {showMainMenu && <MainMenu />}
    </div>
  );
}

export default App;
