import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

export const que = questions;
export const ScoreContext = React.createContext();

function App() {
  const [Toggled, changetoggle] = useState(false);

  function handeltoggel() {
    changetoggle(!Toggled);
    const body = document.body;
    // const html = document.documentElement;
  
    if (Toggled) {
      body.style.backgroundColor = "gray";
      // html.style.backgroundColor = "gray";
    } else {
      body.style.backgroundColor = "white";
      // html.style.backgroundColor = "white";
    }
  }
  

  return (
    <div className={Toggled ? "white-background" : "grey-background"}>
      <div className="top">
        <p className="kalvi">KALVIUM</p>
        <button onClick={handeltoggel} className="togg">{Toggled ? "White" : "Gray"}</button>
      </div>
      <ScoreContext.Provider value={{ que }}>
        <QuestionBox />
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
