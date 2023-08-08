import mongoose from "mongoose"

export const connectDB = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        dbName: "task",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((c) => console.log("Connected to mongodb"))
      .catch((e) => console.log(e));
  };