import mongoose from 'mongoose';
import dotenv from 'dotenv';
const processenv = async () => {
  await dotenv.config();
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(process.env.MONGODB_URI);
};
processenv();
export default mongoose.connection;
