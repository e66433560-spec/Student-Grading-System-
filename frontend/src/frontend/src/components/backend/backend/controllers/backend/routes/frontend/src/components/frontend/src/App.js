import { useState, useEffect } from "react";
import { getStudents, addStudent, deleteStudent } from "./api";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((res) => setStudents(res.data));
  }, []);

  const handleAdd = async (student) => {
    const res = await addStudent(student);
    setStudents([...students, res.data]);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter((s) => s._id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Grading System</h2>
      <StudentForm onAdd={handleAdd} />
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
