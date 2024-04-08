import mongoose from "mongoose"



async function connectToDatabase() {
  try {
    const uri = 'mongodb://localhost:27017/mydatabase';
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } as any);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

export default connectToDatabase