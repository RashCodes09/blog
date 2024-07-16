import { model, models, Schema, Types } from "mongoose";
import { iCommentData } from "../interface";

const commentModel = new Schema<iCommentData>({
  comment: {
    type: String,
  },
  blog: {
    type: Types.ObjectId,
    ref: "Blog",
  },
});
const mycommentModel =
  models.Comment || model<iCommentData>("Comment", commentModel);
export default mycommentModel;
