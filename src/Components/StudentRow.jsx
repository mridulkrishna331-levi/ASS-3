import { useState } from "react";

const getGrade = (score) => {
  if (score >= 90) return { letter: "A+", cls: "grade-a-plus" };
  if (score >= 80) return { letter: "A", cls: "grade-a" };
  if (score >= 70) return { letter: "B", cls: "grade-b" };
  if (score >= 60) return { letter: "C", cls: "grade-c" };
  if (score >= 40) return { letter: "D", cls: "grade-d" };
  return { letter: "F", cls: "grade-f" };
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const StudentRow = ({ index, student, onUpdateScore }) => {
  const [inputScore, setInputScore] = useState(student.score);
  const [saved, setSaved] = useState(false);

  const isPassing = student.score >= 40;
  const grade = getGrade(student.score);

  const handleUpdate = () => {
    if (inputScore === "" || isNaN(inputScore)) return;
    const clamped = Math.max(0, Math.min(100, Number(inputScore)));
    onUpdateScore(student.id, clamped);
    setInputScore(clamped);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUpdate();
  };

  const avatarColors = [
    "avatar--indigo",
    "avatar--teal",
    "avatar--rose",
    "avatar--amber",
    "avatar--cyan",
  ];
  const avatarColor = avatarColors[index % avatarColors.length];

  return (
    <tr className={`student-row ${isPassing ? "row-pass" : "row-fail"}`}>
      <td className="cell-index">{index}</td>

      <td className="cell-name">
        <div className="student-identity">
          <div className={`avatar ${avatarColor}`}>{getInitials(student.name)}</div>
          <span className="student-name">{student.name}</span>
        </div>
      </td>

      <td className="cell-score">
        <div className="score-bar-wrap">
          <span className="score-number">{student.score}</span>
          <div className="score-bar-track">
            <div
              className={`score-bar-fill ${isPassing ? "fill-pass" : "fill-fail"}`}
              style={{ width: `${student.score}%` }}
            />
          </div>
        </div>
      </td>

      <td className="cell-grade">
        <span className={`grade-badge ${grade.cls}`}>{grade.letter}</span>
      </td>

      <td className="cell-status">
        <span className={`status-pill ${isPassing ? "status-pass" : "status-fail"}`}>
          {isPassing ? (
            <>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Pass
            </>
          ) : (
            <>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Fail
            </>
          )}
        </span>
      </td>

      <td className="cell-update">
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
            onKeyDown={handleKeyDown}
            className="score-input"
          />
          <button
            onClick={handleUpdate}
            className={`btn btn-update ${saved ? "btn-saved" : ""}`}
          >
            {saved ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
