function AddBreakForm({ addBreak, startInputRef, endEnputRef }) {
  return (
    <>
      <label className="col-sm-2 col-form-label">start</label>
      <input
        ref={startInputRef}
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
        ref={endEnputRef}
        className="form-control mt-1"
        type="number"
        min="0"
        max="59"
        placeholder="minutes"
      ></input>

      <button onClick={addBreak} className="btn btn-secondary mt-2">
        add break
      </button>
    </>
  );
}
export default AddBreakForm;
