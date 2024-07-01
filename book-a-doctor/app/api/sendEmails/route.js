import { Resend } from 'resend';
import { Email } from './email';
import { NextResponse } from 'next/server';
import EmailTemplate from '@app/emails/index.jsx';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){
    const response = await req.json();
    try{

        const data = await resend.emails.send({
            from: 'doctor-Appointment-bookinghttps://richards-space.onrender.com/',
            to: [response.data.email],
            subject: 'Appointmrnt Booking comfirmation',
            react: EmailTemplate({response})
          });
        return NextResponse.json({data})
    }
    catch(error){
        return NextResponse.json({error})
    }
}