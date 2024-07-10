import { useCallback } from "react";

function useBreaks(breaks, setBreak, setShowAlert) {
  function sort(arr) {
    arr.sort((a, b) => a.start - b.start);
  }
  function isExisit(arr, start, end) {
    return arr.some((obj) => obj.start == start && obj.end == end);
  }
  const addBreak = useCallback((startInputRef, endInputRef) => {
    const tempBreak = [...breaks];
    const start = Number(startInputRef.current.value);
    const end = Number(endInputRef.current.value);
    setShowAlert(false);

    if (isExisit(tempBreak, start, end)) {
      setShowAlert(true);
      setAlertMsg("the break already set before");
    } else if (end <= start) {
      setShowAlert(true);
      setAlertMsg(`the start time must be grater than end`);
      console.table({ start, end });
    } else if (start < 0 || end > 59) {
      setShowAlert(true);
      setAlertMsg("the start must be grater than 0");
    } else if (end > 59) {
      setShowAlert(true);
      setAlertMsg("the end must be less than 59");
    } else {
      tempBreak.push({ start, end });
      sort(tempBreak);
      setBreak(tempBreak);
    }
  });

  function deleteBreak(i) {
    const tempBreak = [...breaks];
    tempBreak.splice(i, 1);
    sort(tempBreak);
    setBreak(tempBreak);
  }

  return { addBreak, deleteBreak };
}

export default useBreaks;
