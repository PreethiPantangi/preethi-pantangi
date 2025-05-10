import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend("re_DEJCWM7C_Nv6j7TZF4H9H3yqbTZnTwxbT");

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'pantangisaipreethi@gmail.com',
      to: 'pantangisaipreethi@gmail.com',
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
