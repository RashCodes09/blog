import dbConfig from "@/app/utlis/dbConfig";
import myadminModel from "@/app/utlis/model/adminModel";
import myblogModel from "@/app/utlis/model/blogModel";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { blogID, adminID } = await params;
    const admin = await myadminModel.findById(adminID);
    const blog = await myblogModel.findByIdAndDelete(blogID);
    admin.blogs.pull(blog);
    admin.save();
    return NextResponse.json({
      message: "Blog deleted",
      status: 200,
      data: blog,
    });
  } catch (error: any) {
    return NextResponse.json({
      messae: "Error Occured!",
      status: 400,
      error: error.message,
    });
  }
};
