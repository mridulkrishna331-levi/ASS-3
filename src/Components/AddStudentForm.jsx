import { useState } from "react";

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Student name cannot be empty.");
      return;
    }
    if (score === "" || isNaN(score)) {
      setError("Please enter a valid numeric score.");
      return;
    }
    const numScore = Number(score);
    if (numScore < 0 || numScore > 100) {
      setError("Score must be between 0 and 100.");
      return;
    }

    onAddStudent(name.trim(), numScore);
    setSuccess(`"${name.trim()}" added successfully!`);
    setName("");
    setScore("");
    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h2 className="card-title">Add New Student</h2>
          <span className="card-subtitle">Fill in the details below</span>
        </div>
      </div>

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="student-name" className="form-label">
              Full Name
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <input
                id="student-name"
                type="text"
                placeholder="e.g. Riya Gupta"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="student-score" className="form-label">
              Score <span className="label-hint">(0–100)</span>
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <input
                id="student-score"
                type="number"
                placeholder="e.g. 75"
                min="0"
                max="100"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group form-group--btn">
            <label className="form-label form-label--hidden">Submit</label>
            <button type="submit" className="btn btn-add">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Student
            </button>
          </div>
        </div>

        {error && (
          <div className="form-message form-message--error">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {error}
          </div>
        )}
        {success && (
          <div className="form-message form-message--success">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            {success}
          </div>
        )}
      </form>
    </section>
  );
};

export default AddStudentForm;
