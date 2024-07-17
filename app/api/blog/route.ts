import dbConfig from "@/app/utlis/dbConfig";
import myadminModel from "@/app/utlis/model/adminModel";
import myblogModel from "@/app/utlis/model/blogModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const blog = await myblogModel.find();
    return NextResponse.json({
      message: "all blogs posted by admin found",
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
