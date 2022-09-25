import mongoose, { ConnectOptions } from 'mongoose';

const URI = process.env.MONGO_DB_URI;

const connectDB = async () => {
  await mongoose.connect(URI, {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  } as ConnectOptions);

  console.log('db connected..!');
};

export default connectDB;
