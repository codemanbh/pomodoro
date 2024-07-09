import { useEffect, useState, useRef } from "react";

function Control() {
  const startInput = useRef();
  const endEnput = useRef();
  const [breaks, setBreak] = useState([{ start: 25, end: 30 }]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  function sort(arr) {
    arr.sort((a, b) => a.start - b.start);
  }
  function addBreak() {
    const tempBreak = [...breaks];
    const start = startInput.current.value;
    const end = endEnput.current.value;
    setShowAlert(false);

    if (isExisit(tempBreak, start, end)) {
      setShowAlert(true);
      setAlertMsg("the break already set before");
    } else if (end <= start) {
      setShowAlert(true);
      setAlertMsg("the start time must be grater than end");
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
  }

  function deleteBreak(i) {
    const tempBreak = [...breaks];
    tempBreak.splice(i, 1);
    sort(tempBreak);
    setBreak(tempBreak);
  }

  function isExisit(arr, start, end) {
    return arr.some((obj) => obj.start == start && obj.end == end);
  }

  return (
    <div className="form-group  d-flex">
      <div>
        <table className="table table-container ">
          <thead>
            <tr>
              <th>start</th>
              <th>end</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {breaks.map((x, i) => (
              <tr className="fade-in">
                <td>{`${x.start}`}</td>
                <td>{`${x.end}`}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteBreak(i)}
                    className="btn btn-secondary"
                  >
                    delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="m-4"></div>
      <div className="content-div w-50">
        <label className="col-sm-2 col-form-label">start</label>
        <input
          ref={startInput}
          id="start col-sm-2"
          className="form-control mt-1"
          type="number"
          min="0"
          max="59"
          placeholder="minutes"
        ></input>

        <label className="mt-2">end</label>
        <input
          id="end"
          ref={endEnput}
          className="form-control mt-1"
          type="number"
          min="0"
          max="59"
          placeholder="minutes"
        ></input>

        <button onClick={addBreak} className="btn btn-secondary mt-2">
          add break
        </button>
        {showAlert ? <div class="alert alert-danger">{alertMsg}</div> : ""}
        <br />
      </div>
    </div>
  );
}

export default Control;
