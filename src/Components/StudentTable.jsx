import StudentRow from "./StudentRow";

const StudentTable = ({ students, onUpdateScore }) => {
  return (
    <section className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h2 className="card-title">Student Records</h2>
          <span className="card-count">{students.length} students</span>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="22" y1="11" x2="16" y2="11"/>
          </svg>
          <p>No students yet. Add one below!</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="student-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Score</th>
                <th>Grade</th>
                <th>Status</th>
                <th>Update Score</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <StudentRow
                  key={student.id}
                  index={index + 1}
                  student={student}
                  onUpdateScore={onUpdateScore}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default StudentTable;
