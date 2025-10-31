export default function StudentList({ students, onDelete }) {
  return (
    <div>
      <h3>Student List</h3>
      {students.length === 0 && <p>No students found.</p>}
      {students.map((s) => (
        <div
          key={s._id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <strong>{s.name}</strong>
          <ul>
            {s.grades.map((g, i) => (
              <li key={i}>
                {g.subject}: {g.score}
              </li>
            ))}
          </ul>
          <button onClick={() => onDelete(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
