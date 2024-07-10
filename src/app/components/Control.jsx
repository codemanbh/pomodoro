import { useEffect, useState, useRef } from "react";
import AddBreakForm from "./AddBreakForm";
import BreaksTable from "./BreaksTable";
import Alert from "./Alert";
import useBreaks from "../hooks/useBreaks";

function Control({ breaks, setBreak }) {
  const [startInputRef, endInputRef] = [useRef(), useRef()];
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const { addBreak, deleteBreak } = useBreaks(breaks, setBreak, setShowAlert);

  return (
    <div className="form-group m-2">
      <BreaksTable breaks={breaks} deleteBreak={deleteBreak} />
      <div className="m-4" />
      <div className="content-div">
        <AddBreakForm
          addBreak={() => addBreak(startInputRef, endInputRef)}
          startInputRef={startInputRef}
          endEnputRef={endInputRef}
        />
        <Alert showAlert={showAlert} msg={alertMsg} />
        <br />
      </div>
    </div>
  );
}

export default Control;
