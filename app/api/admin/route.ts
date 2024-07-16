import dbConfig from "@/app/utlis/dbConfig";
import myadminModel from "@/app/utlis/model/adminModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await dbConfig();
    const admin = await myadminModel.find();
    return NextResponse.json({
      message: " got all admins",
      status: 200,
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "eror getting all admins",
      status: 404,
      error: error.message,
    });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, password, avatar, blogs, avatarID } = await req.json();
    const admin = await myadminModel.create({
      name,
      email,
      password,
      role: "Admin",
      avatar,
      avatarID,
      blogs,
    });
    return NextResponse.json({
      message: " created admin",
      status: 200,
      data: admin,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "eror creating admin",
      status: 404,
      error: error.message,
    });
  }
};
