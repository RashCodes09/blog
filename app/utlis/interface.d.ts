import { Document } from "mongoose";

export interface iAdmin {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  avatarID: string;
  blogs: {}[];
}
export interface iAdminData extends iAdmin, Document {}

export interface iClient {
  name: string;
  email: string;
  password: string;
  role: string;
  image: string;
}
export interface iClientData extends iClient, Document {}

export interface iBlog {
  coverimage: string;
  title: string;
  desc: string;
  //   titlecolor: string;
  //   desccolor: string;
  comments: {}[];
  content: string;
  admin: {};
}
export interface iBlogData extends iBlog, Document {}

export interface iComment {
  comment: string;
  blog: {};
}
export interface iCommentData extends iComment, Document {}
