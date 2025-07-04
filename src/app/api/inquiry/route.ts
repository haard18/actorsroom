import { NextResponse } from 'next/server';
import { connectDB } from '../../lib/mongoose';
import { Inquiry } from '../../models/Inquiry';

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  // Save to MongoDB
  const newInquiry = await Inquiry.create(data);

  // Send to Google Sheets via Apps Script Webhook
  try {

    const { name, email, phoneNumber, typeOfCoaching, location, message } = data;
    console.log('Sending to Google Sheets:', {
      name,
      email,
      phoneNumber,
      typeOfCoaching,
      location,
      message,
    });
    await fetch('https://script.google.com/macros/s/AKfycbyMMBaGmiPD8JbVLitDFhj1xESX8CIZOLYkNsXI0UjtUUwqmhqGVNasz2CqE1MEzlMG/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phoneNumber,
        typeOfCoaching,
        location,
        message,
      }),
    });
  } catch (err) {
    console.error('Failed to send to Google Sheet:', err);
    // optional: still allow request to succeed
  }

  return NextResponse.json({ success: true, inquiry: newInquiry });
}

export async function GET() {
  await connectDB();
  const inquiries = await Inquiry.find();
  return NextResponse.json({ success: true, inquiries });
}
