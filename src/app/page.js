"use client";
import { useEffect, useState } from "react";

import styles from "react-clock/dist/Clock.css";
import CustomClock from "./components/CustomClock";
import Control from "./components/Control";
import GlobalContext from "./contexts/GlobalContext";

export default function Home() {
  const [breaks, setBreak] = useState([{ start: 25, end: 30 }]);

  return (
    <main className="container ">
      <div className="d-flex w-100 justify-content-center">
        <CustomClock breaks={breaks} setBreak={setBreak} />
        <Control breaks={breaks} setBreak={setBreak} />
      </div>{" "}
    </main>
  );
}
