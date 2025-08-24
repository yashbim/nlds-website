import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const contactNumber = formData.get('contactNumber') as string;
    const homeAddress = formData.get('homeAddress') as string;
    const entity = formData.get('entity') as string;
    const attendingEvent = formData.get('attendingEvent') === 'true';
    const cartItems = formData.get('cartItems') as string;
    const totalItems = formData.get('totalItems') as string;
    const totalAmount = formData.get('totalAmount') as string;
    const orderDate = formData.get('orderDate') as string;
    
    // Handle file upload
    const proofFile = formData.get('proofOfPurchase') as File;
    let attachment = null;
    
    if (proofFile && proofFile.size > 0) {
      // Convert file to buffer for attachment
      const buffer = Buffer.from(await proofFile.arrayBuffer());
      attachment = {
        filename: proofFile.name,
        content: buffer,
      };
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #e91e63; text-align: center;">New Merch Order</h1>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; border-bottom: 2px solid #e91e63; padding-bottom: 10px;">Customer Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>Home Address:</strong> ${homeAddress}</p>
          <p><strong>Entity:</strong> ${entity}</p>
          <p><strong>Attending Event:</strong> ${attendingEvent ? 'Yes' : 'No'}</p>
          <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleString()}</p>
        </div>

        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; border-bottom: 2px solid #e91e63; padding-bottom: 10px;">Order Details</h2>
          <div style="white-space: pre-line; margin: 10px 0;">${cartItems}</div>
          <div style="border-top: 1px solid #ddd; padding-top: 15px; margin-top: 15px;">
            <p><strong>Total Items:</strong> ${totalItems}</p>
            <p style="font-size: 18px; color: #e91e63;"><strong>Total Amount: ${totalAmount}</strong></p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px;">
          <p style="margin: 0; color: #666;">Proof of purchase has been attached to this email.</p>
        </div>
      </div>
    `;

    // Send email
    const emailData: any = {
      from: 'NLDS Merch <onboarding@resend.dev>', // Resend's default domain
      to: ['bimsaramadurapperuma2003@gmail.com'], // Replace with your email
      replyTo: email,
      subject: `NLDS 2025 Merch - ${name}`,
      html: emailHtml,
    };

    // Add attachment if exists
    if (attachment) {
      emailData.attachments = [attachment];
    }

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'Squid Game Store <onboarding@resend.dev>',
      to: [email],
      subject: 'Order Confirmation - Squid Game Store',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #e91e63; text-align: center;">Order Confirmation</h1>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your order! We have received your purchase and are processing it.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Order Summary:</h3>
            <p><strong>Total Items:</strong> ${totalItems}</p>
            <p><strong>Total Amount:</strong> ${totalAmount}</p>
            <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleString()}</p>
          </div>

          <p>We will review your proof of purchase and contact you soon with further details.</p>
          
          <p style="text-align: center; margin-top: 30px;">
            <strong>Thank you for choosing Squid Game Store!</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Order submitted successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}