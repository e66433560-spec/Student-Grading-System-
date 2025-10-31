import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const addStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
};
