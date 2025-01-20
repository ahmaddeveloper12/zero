// pages/api/cv.js
import dbConnect from "../../lib/dbConnect";
import Cv from "../../models/CV";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const cvData = req.body;
      const newCv = new Cv(cvData);
      await newCv.save();
      res.status(201).json({ success: true, message: 'CV submitted successfully!' });
    } catch (error) {
      console.error("Error saving CV:", error);  // Log the error to the console
      res.status(500).json({ success: false, message: 'Error saving CV.' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Invalid request method.' });
  }
}
