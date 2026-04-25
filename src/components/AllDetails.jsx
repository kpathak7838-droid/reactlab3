import { useEffect, useState } from "react";

function AllDetails({ students, updateScore }) {

  const [inputs, setInputs] = useState(students.map(s => s.score));

  // keep inputs in sync with students
  useEffect(() => {
    setInputs(students.map(s => s.score));
  }, [students]);

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="details-container">

      <table className="details-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>

              <td>{s.score}</td>

              <td>
                <span className={s.score >= 40 ? "pass" : "fail"}>
                  {s.score >= 40 ? "Pass" : "Fail"}
                </span>
              </td>

              <td>
                <input
                  type="number"
                  value={inputs[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                />

                <button onClick={() => updateScore(i, inputs[i])}>
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default AllDetails;