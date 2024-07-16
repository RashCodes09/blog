import { model, models, Schema, Types } from "mongoose";
import { iClientData } from "../interface";

const clientModel = new Schema<iClientData>(
  {
    name: {
      type: String,
      required: true,
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
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
const myclientModel =
  models.Client || model<iClientData>("Client", clientModel);
export default myclientModel;
