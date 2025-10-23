import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Log the contact form submission
    console.log('New contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement email sending with Resend or your preferred email service
    // Example with Resend:
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Nixi Contact <contacto@nixi.es>',
      to: ['miguel@nixi.es'],
      subject: `Nuevo mensaje de ${data.name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Error processing the form' },
      { status: 500 }
    );
  }
}
