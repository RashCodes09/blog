import { model, models, Schema, Types } from "mongoose";
import { iAdminData } from "../interface";

const adminModel = new Schema<iAdminData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    blogs: [
      {
        type: Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);
const myadminModel = models.Admin || model<iAdminData>("Admin", adminModel);
export default myadminModel;
