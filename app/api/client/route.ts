// import dbConfig from "@/app/utlis/dbConfig";
// import myclientModel from "@/app/utlis/model/clientModel";
// import { NextRequest, NextResponse } from "next/server";

// export const GET = async (req: NextRequest) => {
//   try {
//     await dbConfig();
//     const client = await myclientModel.find();
//     return NextResponse.json({
//       message: " got all client",
//       status: 200,
//       data: client,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       message: "eror getting all client",
//       status: 404,
//       error: error.message,
//     });
//   }
// };

// export const POST = async (req: NextRequest) => {
//   try {
//     await dbConfig();
//     const { name, email, password, userID, image } = await req.json();
//     const client = await myclientModel.create({
//       name,
//       email,
//       password,
//       role: "client",
//       image,
//     });
//     return NextResponse.json({
//       message: " created client",
//       status: 200,
//       data: client,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       message: "eror creating client",
//       status: 404,
//       error: error.message,
//     });
//   }
// };
