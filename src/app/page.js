'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
import 'react-clock/dist/Clock.css';
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
export default function Home() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main >
       {/* <p>Current time:</p> */}
      <Clock value={value} renderNumbers={true} />
    </main>
  );
}
