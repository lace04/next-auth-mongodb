import { NextResponse } from 'next/server';
import User from '@/models/user';
import { connectDB } from '@/libs/mongodb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { fullname, email, password } = await request.json();

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: 'Password must be at least 6 characters',
      },
      {
        status: 400,
      }
    );

  try {
    await connectDB();
    const userFound = await User.findOne({ email });

    if (userFound)
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      fullname,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    // console.log(savedUser);

    return NextResponse.json({
      message: 'User created successfully',
      _id: savedUser._id,
      email: savedUser.email,
      fullname: savedUser.fullname,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
