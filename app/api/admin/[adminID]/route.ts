import dbConfig from "@/app/utlis/dbConfig";
import myadminModel from "@/app/utlis/model/adminModel";
import { NextRequest, NextResponse } from "next/server";
import myblogModel from "@/app/utlis/model/blogModel";
import { Types } from "mongoose";

export const PATCH = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { adminID } = await params;
    const { avatar, avatarID } = await req.json();
    const admin = await myadminModel.findByIdAndUpdate(adminID, {
      avatar,
      avatarID,
    });
    return NextResponse.json({
      message: " update sucessfull",
      status: 200,
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "eror updating",
      status: 404,
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { title, coverimage, desc, comments, admin } = await req.json();

    const { adminID } = params;
    const adminData = await myadminModel.findById(adminID);

    if (adminData) {
      const blog = await myblogModel.create({
        title,
        coverimage,
        desc,
        comments,
        admin: adminID,
      });

      adminData.blogs.push(new Types.ObjectId(blog._id));
      adminData.save();

      return NextResponse.json({
        message: " created blog",
        status: 200,
        data: blog,
      });
    } else {
      return NextResponse.json({
        message: "admin does not exist",
        status: 404,
      });
    }
  } catch (error: any) {
    return NextResponse.json({
      message: "eror creating blog",
      status: 404,
      error: error.message,
    });
  }
};

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { adminID } = params;

    const adminData = await myadminModel.findById(adminID).populate({
      path: "blogs",
    });

    return NextResponse.json({
      message: "blogs found",
      status: 200,
      data: adminData,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error getting blogs",
      status: 404,
      error: error.message,
    });
  }
};
