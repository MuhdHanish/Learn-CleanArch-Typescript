import mongoose, { ConnectOptions } from 'mongoose';

const uri = "mongodb://127.0.0.1:27017/mydatabase"; // MongoDB server address and port , database name
const connectionOptions: ConnectOptions|any = {
  useNewUrlParser: true, // Use the new URL parser
  useUnifiedTopology: true, // Use the new server discovery and monitoring engine
};

const connectDatabase = async(): Promise<any> =>{
 try {
  await mongoose.connect(
   uri, connectionOptions
  );
  console.log("Connected to database successfully");
 } catch (error) {
  console.log("Failed to connect to MongoDB", error);
 }
}

export default connectDatabase;