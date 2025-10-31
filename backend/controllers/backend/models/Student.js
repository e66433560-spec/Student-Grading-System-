import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  grades: [{ subject: String, score: Number }],
});

export default mongoose.model("Student", studentSchema);
