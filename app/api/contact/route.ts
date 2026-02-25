import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const { error } = await resend.emails.send({
      from: 'Nixi Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `Nuevo mensaje de contacto de ${data.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Error processing the form' },
      { status: 500 }
    );
  }
}
