import { model, models, Schema, Types } from "mongoose";
import { iBlogData } from "../interface";

const blogModel = new Schema<iBlogData>(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
    },
    coverimage: {
      type: String,
    },
    admin: {
      type: Types.ObjectId,
      ref: "Admin",
    },
    comments: [
      {
        type: Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);
const myblogModel = models.Blog || model<iBlogData>("Blog", blogModel);
export default myblogModel;
