import dbConnect from "@/lib/utils";
import User from "../../../../lib/models/user.models";

import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { name,username, email, password } = await request.json();

  await dbConnect();

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
