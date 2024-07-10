"use client";
import { useEffect, useState } from "react";

import styles from "react-clock/dist/Clock.css";
import CustomClock from "./components/CustomClock";
import Control from "./components/Control";
import GlobalContext from "./contexts/GlobalContext";
import SideBar from "./components/SideBar";

export default function Home() {
  const [breaks, setBreak] = useState([{ start: -1, end: -1 }]);
  const [showSideBar, setShowSideBar] = useState(false);
  useEffect(() => {
    let stringData = localStorage.getItem("data");
    let jsonData = JSON.parse(stringData);
    setBreak(jsonData);
  }, []);
  useEffect(() => {
    if (breaks[0].start != -1 && breaks[0].end != -1) {
      localStorage.setItem("data", JSON.stringify(breaks));
    }
  }, [breaks]);

  function toggleSideBar() {
    setShowSideBar((prev) => !prev);
  }

  return (
    <div className="d-flex">
      <main className="container">
        <CustomClock
          toggleSideBar={toggleSideBar}
          breaks={breaks}
          setBreak={setBreak}
        />
      </main>
      <SideBar showSideBar={showSideBar}>
        <Control breaks={breaks} setBreak={setBreak} />
      </SideBar>
    </div>
  );
}
