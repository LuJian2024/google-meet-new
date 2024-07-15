// import { useState } from "react";
import "./App.css";

import ControlBar from "./components/ControlBar/ControlBar";

import MainVideoArea from "./components/MainVideoArea/MainVideoArea.jsx";
import HeaderBar from "./HeaderBar";
import RealTimeClock from "./RealTimeClock";
import Emojis from "./Emojis/Emojis";

function App() {
  return (
    <>
      <HeaderBar />
      <MainVideoArea />
      <Emojis />
      <div className="footer">
        <RealTimeClock />
      <ControlBar />
      </div>
    </>
  );

}

export default App;
