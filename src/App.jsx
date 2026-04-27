import { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", score: 78 },
  { id: 2, name: "Priya Mehta", score: 34 },
  { id: 3, name: "Rohan Verma", score: 55 },
  { id: 4, name: "Sneha Iyer", score: 90 },
  { id: 5, name: "Kabir Singh", score: 22 },
];

const App = () => {
  const [students, setStudents] = useState(initialStudents);

  const updateScore = (id, newScore) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: Number(newScore) } : s))
    );
  };

  const addStudent = (name, score) => {
    const newStudent = { id: Date.now(), name, score: Number(score) };
    setStudents((prev) => [...prev, newStudent]);
  };

  const passCount = students.filter((s) => s.score >= 40).length;
  const failCount = students.length - passCount;
  const avgScore =
    students.length > 0
      ? Math.round(students.reduce((a, s) => a + s.score, 0) / students.length)
      : 0;

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon-box stat-icon-box--blue">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-value">{students.length}</span>
              <span className="stat-label">Total Students</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box stat-icon-box--green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-value stat-value--pass">{passCount}</span>
              <span className="stat-label">Passed</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box stat-icon-box--red">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-value stat-value--fail">{failCount}</span>
              <span className="stat-label">Failed</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box stat-icon-box--purple">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-value stat-value--avg">{avgScore}</span>
              <span className="stat-label">Class Average</span>
            </div>
          </div>
        </div>

        <StudentTable students={students} onUpdateScore={updateScore} />
        <AddStudentForm onAddStudent={addStudent} />
      </main>
    </div>
  );
};

export default App;
