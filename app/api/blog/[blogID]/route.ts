// import dbConfig from "@/app/utlis/dbConfig";
// import myblogModel from "@/app/utlis/model/blogModel";
// import { NextRequest, NextResponse } from "next/server";

// export const PATCH = async (req: NextRequest, { params }: any) => {
//   try {
//     await dbConfig();
//     const { blogID } = await params;
//     const { title, coverimage, desc, titlecolor, desccolor } = await req.json();
//     const blog = await myblogModel.findByIdAndUpdate(blogID, {
//       title,
//       coverimage,
//       desc,
//       titlecolor,
//       desccolor,
//     });
//     return NextResponse.json({
//       message: " update sucessfull",
//       status: 201,
//       data: blog,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       message: "eror updating",
//       status: 404,
//       error: error.message,
//     });
//   }
// };
