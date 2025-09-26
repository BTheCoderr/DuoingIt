import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'DouingIt <onboarding@resend.dev>',
      to: ['info@douingit.com'], // Replace with your actual email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${service || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin-bottom: 15px;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-left: 4px solid #059669; border-radius: 4px;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain our high service standards.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the customer
    await resend.emails.send({
      from: 'DouingIt <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting DouingIt!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; margin-bottom: 10px;">Thank You, ${name}!</h1>
            <p style="color: #6b7280; font-size: 18px;">We've received your message and will be in touch soon.</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
            <h2 style="color: #374151; margin-bottom: 15px;">What happens next?</h2>
            <ul style="color: #6b7280; line-height: 1.8;">
              <li>We'll review your inquiry within 24 hours</li>
              <li>One of our legacy preservation specialists will reach out to you</li>
              <li>We'll schedule a consultation to discuss your family's unique needs</li>
              <li>Together, we'll create a plan to preserve your family's precious stories</li>
            </ul>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: #065f46; margin: 0; font-weight: 500;">
              "Your family's legacy is powerful - let's preserve it together."
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #9ca3af; font-size: 14px;">
            <p>DouingIt - Preserving legacies, one family at a time</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
