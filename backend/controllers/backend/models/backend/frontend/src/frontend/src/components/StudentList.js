export default function StudentList({ students, onDelete }) {
  return (
    <div>
      <h3>Student List</h3>
      {students.map((student) => (
        <div key={student._id}>
          <strong>{student.name}</strong>
          <ul>
            {student.grades.map((g, i) => (
              <li key={i}>{g.subject}: {g.score}</li>
            ))}
          </ul>
          <button onClick={() => onDelete(student._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
