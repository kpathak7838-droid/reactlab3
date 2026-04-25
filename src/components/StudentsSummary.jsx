function StudentsSummary({ students }) {

  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;

  const avg =
    total === 0
      ? 0
      : Math.floor(
          students.reduce((acc, s) => acc + Number(s.score), 0) / total
        );

  return (
    <div className="summary-container">

      <div className="summary-box">
        <span>Total</span>
        <h2>{total}</h2>
      </div>

      <div className="summary-box">
        <span>Passed</span>
        <h2>{passed}</h2>
      </div>

      <div className="summary-box">
        <span>Average</span>
        <h2>{avg}</h2>
      </div>

    </div>
  );
}

export default StudentsSummary;