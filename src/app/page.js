"use client";
import { useEffect, useState } from "react";

import styles from "react-clock/dist/Clock.css";
import CustomClock from "./components/CustomClock";
import Control from "./components/Control";

export default function Home() {
  return (
    <main className="container ">
      <div className="d-flex w-100 justify-content-center">
        <CustomClock />
        <Control />
      </div>
    </main>
  );
}
