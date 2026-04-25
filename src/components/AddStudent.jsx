import { useState } from "react";

function AddStudent({ students, setStudents }) {

  const [newStudent, setNewStudent] = useState({
    name: "",
    score: ""
  });

  const handleChange = (field, value) => {
    setNewStudent((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const submitStudent = () => {
    // prevent empty inputs
    if (!newStudent.name || !newStudent.score) return;

    // validate score range
    const scoreValue = Number(newStudent.score);
    if (scoreValue < 0 || scoreValue > 100) {
      alert("Score must be between 0 and 100");
      return;
    }

    const studentData = {
      id: students.length + 1,
      name: newStudent.name,
      score: scoreValue
    };

    setStudents((prev) => [...prev, studentData]);

    // reset input fields
    setNewStudent({
      name: "",
      score: ""
    });
  };

  return (
    <div className="add-container">

      <div className="add-header">
        <span>Register Student</span>
      </div>

      <div className="add-form">
        <input
          type="text"
          placeholder="Student Name"
          className="add-input"
          value={newStudent.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          className="add-input"
          value={newStudent.score}
          onChange={(e) => handleChange("score", e.target.value)}
        />

        <button className="add-button" onClick={submitStudent}>
          + Add
        </button>
      </div>

    </div>
  );
}

export default AddStudent;