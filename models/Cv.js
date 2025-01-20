// models/Cv.js
import mongoose from "mongoose";

const CvSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    education: [
      {
        degree: String,
        university: String,
        year: String,
      },
    ],
    experience: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],
    skills: [String],
  },
  { timestamps: true }
);

const Cv = mongoose.models.Cv || mongoose.model("Cv", CvSchema);

export default Cv;
