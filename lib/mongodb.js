import mongoose from 'mongoose';

const connectToDatabase = async () => {
  // If a connection already exists, skip re-connecting
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw new Error('Database connection failed');
  }
};

export default connectToDatabase;
