import { NextResponse } from 'next/server';
import { connectDB } from '../../lib/mongoose';
import { Inquiry } from '../../models/Inquiry';

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const newInquiry = await Inquiry.create(data);
  return NextResponse.json({ success: true, inquiry: newInquiry });
}
