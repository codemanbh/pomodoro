import Clock from "react-clock";
import { useEffect, useRef, useState } from "react";

function CustomClock({ breaks, setBreaks, toggleSideBar }) {
  const [value, setValue] = useState(new Date());
  const [timeUntilBreak, setTimeUntilBreak] = useState("wait...");
  const [sec, setSec] = useState(2);

  function getObjectInRange(objects, currentMoment) {
    // Sort objects based on the 'start' property
    objects.sort((a, b) => a.start - b.start);

    let result = objects[0];
    for (let i = 0; i < objects.length; i++) {
      const { start, end } = objects[i];
      if (currentMoment >= start && currentMoment <= end) {
        result = objects[i];
        break;
      }
      if (start > currentMoment) {
        result = objects[i];
        break;
      }
    }
    console.table(result);
    return result;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let min = new Date().getMinutes();

      let currentBreak = getObjectInRange([...breaks], min);

      // console.table(breaks);
      if (min < currentBreak.start) {
        setTimeUntilBreak(`time until break: ${currentBreak.start - min} min`);
      } else if (min >= currentBreak.start && min < currentBreak.end) {
        // console.log("jaisdmsd");

        setTimeUntilBreak(`Break: ${currentBreak.end - min} min`);
      }

      setValue(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [breaks]);
  let g = useRef();
  const clockRef = useRef();
  function toggleFullScreen() {
    // document.getElementsByTagName("html")[0].requestFullscreen();
    const element = document.getElementsByTagName("html")[0];
    if (!document.fullscreenElement) {
      element
        .requestFullscreen()
        .catch((err) => console.error(`Error: ${err}`));
    } else {
      document.exitFullscreen();
    }
  }
  return (
    <div className="f-flex text-center w-100  m-4">
      <div className="w-100">
        <Clock
          ref={clockRef}
          className="mx-auto "
          size={"60vh"}
          value={value}
          renderNumbers={true}
        />
      </div>

      <div className="mt-2">
        <h4>
          {value.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h4>
        <h4>{timeUntilBreak}</h4>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button onClick={toggleSideBar} className="btn btn-secondary">
            Customize Breaks
          </button>

          <button onClick={toggleFullScreen} className="btn btn-secondary mt-2">
            fullScreen
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomClock;
