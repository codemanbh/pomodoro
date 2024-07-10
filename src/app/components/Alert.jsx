function Alert({ showAlert, msg }) {
  return showAlert ? (
    <div class="alert alert-danger mt-2 fade-in">{msg}</div>
  ) : (
    <></>
  );
}

export default Alert;
