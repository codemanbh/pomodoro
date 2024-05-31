'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import 'react-clock/dist/Clock.css';
// import 'clock.css';

import { useEffect, useState } from 'react';
import Clock from 'react-clock';



export default function Home() {
  const [value, setValue] = useState(new Date());
  const [timeUntilBreak, setTimeUntilBreak] = useState('wait...');
// const [min, setMin] = useState(value.getMinutes());
const [sec, setSec] = useState(2);


function everySecond() {
  setSec(value.getSeconds())

  if (min < 25) {
    setTimeUntilBreak(`time until break: ${25 - min} min`);
  } else if (min >= 25 && min <= 30) {
    console.log(sec);

    setTimeUntilBreak(`Break: ${30 - min} min`);
  } else if (min < 50) {
    setTimeUntilBreak(`time until break: ${50 - min} min`);
  } else if (min >= 50 && min <= 60) {
    setTimeUntilBreak(`Break: ${60 - min} min`);
  }
  setValue(new Date());
}

  useEffect(() => {
    
    const interval = setInterval(() => {
      // setSec(  new Date().getSeconds())
      console.log('hello');


      let min = new Date().getMinutes();
      if (min < 25) {
        setTimeUntilBreak(`time until break: ${25 - min} min`);
      } else if (min >= 25 && min <= 30) {
        console.log(sec);
    
        setTimeUntilBreak(`Break: ${30 - min} min`);
      } else if (min < 50) {
        setTimeUntilBreak(`time until break: ${50 - min} min`);
      } else if (min >= 50 && min <= 60) {
        setTimeUntilBreak(`Break: ${60 - min} min`);
      }


      setValue(new Date());
    }, 1000);


    return () => {
      clearInterval(interval);
    };
  }, []);

  


  return (
    <main className={styles.container}>
       {/* <p>Current time:</p> */}
       <div className={styles.middle}>
       <Clock  value={value} renderNumbers={true} />
      
     <h4 className={styles.timeUntilText}>{timeUntilBreak }</h4>
       </div>

     {/* <h1>{sec}</h1> */}
    </main>
  );
}
