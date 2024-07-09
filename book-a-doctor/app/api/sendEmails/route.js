import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { data } = await req.json();

    const result = data;

    // Send email using Resend library
    const emailResponse = await resend.emails.send({
      from: 'doctor-Appointment-bookinghttps://richards-space.onrender.com/',
      to: [data.Email],
      subject: 'Appointment Booking Confirmation',
      react: EmailTemplate({ userFirstname: result.userFirstname }), // Pass correct data to EmailTemplate
    });

    return NextResponse.json({ data: emailResponse }); // Return the response from email sending
  } catch (error) {
    return NextResponse.json({ error: error.message }); // Return error if sending fails
  }
}
