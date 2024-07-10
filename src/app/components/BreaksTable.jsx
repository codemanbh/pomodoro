function BreaksTable({ breaks, deleteBreak }) {
  return (
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
  );
}

export default BreaksTable;
