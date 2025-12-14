'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors.map((e) => e.message).join(', '),
    };
  }

  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: 'Email service is not configured. Please try again later.',
    };
  }

  try {
    // Send email via Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'lavtiwarioriginal@gmail.com',
        subject: `New Contact Form Submission from ${parsed.data.name}`,
        html: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${parsed.data.name}</p>
          <p><strong>Email:</strong> ${parsed.data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${parsed.data.message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: parsed.data.email,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
}
