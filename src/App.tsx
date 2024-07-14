import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstScoreboard from "./assets/components/FirstScoreboard";
import SecondScoreboard from "./assets/components/SecondScoreboard";
import React from "react";
import SummaryScoreboard from "./assets/components/SummaryScoreboard";

function App() {
  const [firsTeamName, setFirsTeamName] = useState("Rehan's Team");
  const [secondTeamName, setSecondTeamName] = useState("Sameer's Team");

  return (
    <div>
      {/* <FirstScoreboard /> */}
      <SecondScoreboard
        teamNameFirst={firsTeamName}
        teamNameSecond={secondTeamName}
      />
      {/* <SummaryScoreboard /> */}
    </div>
  );
}

export default App;
