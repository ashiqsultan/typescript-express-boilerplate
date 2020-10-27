import mongoose from "mongoose";

const dbConnect = async (dbConnectionString: string | undefined) => {
  const connectOptions: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  };
  console.log("Trying to connect to Mongo Database...");
  try {
    await mongoose.connect(dbConnectionString as string, connectOptions);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("Error, Cannot connect to MongoDB", err.message);
    console.error(err);
  }
};

export default dbConnect;
