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
  const [overCounting, setOverCounting] = useState("9.5");
  const [firstTeamRun, setFirstTeamRun] = useState(10);
  const [secondTeamRun, setSecondTeamRun] = useState(0);
  const [firstTeamWicket, setFirstTeamWicket] = useState(5);
  const [secondTeamWicket, setSecondTeamWicket] = useState(5);

  return (
    <div>
      {/* <FirstScoreboard /> */}
      <SecondScoreboard
        teamNameFirst={firsTeamName}
        teamNameSecond={secondTeamName}
        overCounting={overCounting}
        firstTeamRun={firstTeamRun}
        secondTeamRun={secondTeamRun}
        firstTeamWicket={firstTeamWicket}
        secondTeamWicket={secondTeamWicket}
      />
      {/* <SummaryScoreboard /> */}
    </div>
  );
}

export default App;
