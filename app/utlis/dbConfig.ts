import { connect } from "mongoose";

const dbConfig = async () => {
  try {
    await connect(process.env.MONGO_CLOUD as string).then(() => {
      console.clear();
      console.log("sever connected");
    });
  } catch (error: any) {
    console.error(error.message);
  }
};
export default dbConfig;
