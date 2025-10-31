import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, grades: [{ subject, score: Number(score) }] });
    setName("");
    setSubject("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Student</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
      <input value={score} onChange={(e) => setScore(e.target.value)} type="number" placeholder="Score" required />
      <button type="submit">Add</button>
    </form>
  );
}
