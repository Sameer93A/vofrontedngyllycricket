import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstScoreboard from "./assets/components/FirstScoreboard";
import SecondScoreboard from "./assets/components/SecondScoreboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <FirstScoreboard /> */}
      <SecondScoreboard />
    </div>
  );
}

export default App;
