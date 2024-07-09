import Clock from "react-clock";
import { useEffect, useState } from "react";

function CustomClock({ breaks, setBreaks }) {
  const [value, setValue] = useState(new Date());
  const [timeUntilBreak, setTimeUntilBreak] = useState("wait...");
  const [sec, setSec] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      let min = new Date().getMinutes();
      if (min < 25) {
        setTimeUntilBreak(`time until break: ${25 - min} min`);
      } else if (min >= 25 && min < 30) {
        console.log(sec);

        setTimeUntilBreak(`Break: ${30 - min} min`);
      } else if (min < 50) {
        setTimeUntilBreak(`time until break: ${50 - min} min`);
      } else if (min >= 50 && min < 60) {
        setTimeUntilBreak(`Break: ${60 - min} min`);
      }

      setValue(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="f-flex text-center  m-4">
      <Clock className="mx-auto" value={value} renderNumbers={true} />

      <div className="mt-2">
        <h4>
          {value.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h4>
        <h4>{timeUntilBreak}</h4>
      </div>
    </div>
  );
}

export default CustomClock;
