import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstScoreboard from "./assets/components/FirstScoreboard";
import SecondScoreboard from "./assets/components/SecondScoreboard";
import React from "react";
import SummaryScoreboard from "./assets/components/SummaryScoreboard";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

function App() {
  const [firsTeamName, setFirsTeamName] = useState("Rehan's Team");
  const [secondTeamName, setSecondTeamName] = useState("Sameer's Team");
  const [overCounting, setOverCounting] = useState(0);
  const [firstTeamRun, setFirstTeamRun] = useState(0);
  const [secondTeamRun, setSecondTeamRun] = useState(0);
  const [firstTeamWicket, setFirstTeamWicket] = useState(5);
  const [secondTeamWicket, setSecondTeamWicket] = useState(5);

  function handleClick(e) {
    setFirstTeamRun(Number(e.target.innerText));
    setOverCounting(overCounting + 1);
  }

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
      <div className="flex justify-center ">
        <Card className="w-full max-w-2xl">
          <CardContent className="grid gap-6 py-6">
            <div>
              <div className="flex">
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    0
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    1
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    2
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    3
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    4
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    5
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    6
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    wide
                  </button>
                </div>
                <div className="mr-4">
                  <button
                    onClick={handleClick}
                    className="border hover:bg-blue-400 p-1"
                  >
                    wicket
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* <SummaryScoreboard /> */}
    </div>
  );
}

export default App;
