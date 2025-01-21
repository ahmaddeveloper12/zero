import connectToDatabase from '../../lib/mongodb'; // Import MongoDB connection
import CV from '../../models/CV'; // Import CV model

const handler = async (req, res) => {
  await connectToDatabase();

  if (req.method === 'POST') {
    // Handle CV form submission
    try {
      const { fullName, email, phone, address, skills, experience, education } = req.body;

      const newCV = new CV({
        fullName,
        email,
        phone,
        address,
        skills,
        experience,
        education,
      });

      await newCV.save();
      res.status(201).json({ message: 'CV submitted successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to save CV', error: error.message });
    }
  } else if (req.method === 'GET') {
    // Fetch all CVs
    try {
      const cvs = await CV.find();
      res.status(200).json(cvs);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch CVs', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
