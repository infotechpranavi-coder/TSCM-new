import { Resend } from 'resend';
import { NextResponse } from 'next/server';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredResponse?: string;
  message?: string;
  consent?: boolean;
  captcha?: { a?: number; b?: number; answer?: number };
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const firstName = body.firstName?.trim() ?? '';
    const lastName = body.lastName?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const phone = body.phone?.trim() ?? '';
    const service = body.service?.trim() ?? '';
    const preferredResponse = body.preferredResponse?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!body.consent) {
      return NextResponse.json(
        { error: 'You must accept the confidentiality notice to submit.' },
        { status: 400 },
      );
    }

    const { a, b, answer } = body.captcha ?? {};
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof answer !== 'number' ||
      answer !== a + b
    ) {
      return NextResponse.json(
        { error: 'Security check failed. Please solve the calculation and try again.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL ?? 'indiebimofficial@gmail.com';
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ?? 'Indiebim Contact <onboarding@resend.dev>';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please call us directly.' },
        { status: 503 },
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();
    const subject = `New contact enquiry — ${service || 'General'} (${fullName})`;

    const html = `
      <h2>New secure assessment request</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Service:</strong> ${escapeHtml(service || 'Not specified')}</p>
      <p><strong>Preferred response:</strong> ${escapeHtml(preferredResponse || 'Not specified')}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      <hr />
      <p style="color:#64748b;font-size:12px">Sent from the Indiebim contact form at ${new Date().toISOString()}</p>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Unable to send your message right now. Please try again or call us.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}
