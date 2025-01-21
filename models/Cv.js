import mongoose from 'mongoose';

const cvSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  skills: { type: [String], required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
});

const CV = mongoose.models.CV || mongoose.model('CV', cvSchema);

export default CV;
