import { useState } from "react";
import Heading from "./components/Heading";
import AddStudent from "./components/AddStudent";
import StudentsSummary from "./components/StudentsSummary";
import AllDetails from "./components/AllDetails";
import "./App.css";

function App() {

  const initialStudents = [
    { id: 1, name: "Jatin", score: 98 },
    { id: 2, name: "Joy", score: 58 },
    { id: 3, name: "Kajal", score: 39 }
  ];

  const [students, setStudents] = useState(initialStudents);

  const updateScore = (index, newScore) => {
    const updated = students.map((s, i) =>
      i === index ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  return (
    <div>
      <Heading />
      <AddStudent students={students} setStudents={setStudents} />
      <StudentsSummary students={students} />
      <AllDetails students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;