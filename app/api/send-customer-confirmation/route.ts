// app/api/send-customer-confirmation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'node-mailjet';

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!
});

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

interface CustomerData {
  name: string;
  email: string;
  contactNumber: string;
  homeAddress: string;
  entity: string;
  attendingEvent: boolean;
  cartItems: CartItem[];
  totalItems: number;
  totalAmount: number;
  orderDate: string;
  orderId: string;
}

function generateOrderId(): string {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `NLDS-${timestamp.slice(-6)}-${random}`;
}

function formatCartItemsHTML(cartItems: CartItem[]): string {
  return cartItems.map(item => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px 0; font-weight: 500;">${item.name}${item.size ? ` (Size: ${item.size})` : ''}</td>
      <td style="padding: 12px 0; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px 0; text-align: right; font-weight: 600;">${item.price.toLocaleString()} LKR</td>
      <td style="padding: 12px 0; text-align: right; font-weight: 700;">${(item.price * item.quantity).toLocaleString()} LKR</td>
    </tr>
  `).join('');
}

function generateEmailHTML(data: CustomerData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - NLDS 2025</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
      <div style="max-width: 600px; margin: 0 auto; background-color: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">NLDS 2025</h1>
          <p style="color: #d1d5db; margin: 10px 0 0 0; font-size: 16px;">Order Confirmation</p>
        </div>

        <!-- Order Confirmed Message -->
        <div style="padding: 30px; text-align: center; background-color: #ecfdf5; border-bottom: 1px solid #e5e7eb;">
          <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
          <h2 style="color: #065f46; margin: 0 0 10px 0; font-size: 24px;">Order Confirmed!</h2>
          <p style="color: #374151; margin: 0; font-size: 16px;">Thank you for your purchase. We've received your order and proof of purchase.</p>
        </div>

        <!-- Customer Details -->
        <div style="padding: 30px; border-bottom: 1px solid #e5e7eb;">
          <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Order Details</h3>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Order ID:</strong> ${data.orderId}</p>
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Order Date:</strong> ${new Date(data.orderDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            <p style="margin: 0; color: #374151;"><strong>Status:</strong> <span style="color: #059669; font-weight: 600;">Confirmed</span></p>
          </div>

          <h4 style="color: #1f2937; margin: 20px 0 15px 0; font-size: 18px; font-weight: 600;">Customer Information</h4>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Contact:</strong> ${data.contactNumber}</p>
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Address:</strong> ${data.homeAddress}</p>
            <p style="margin: 0 0 8px 0; color: #374151;"><strong>Entity:</strong> ${data.entity}</p>
            <p style="margin: 0; color: #374151;"><strong>Attending NLDS 2025:</strong> ${data.attendingEvent ? 'Yes' : 'No'}</p>
          </div>
        </div>

        <!-- Order Items -->
        <div style="padding: 30px; border-bottom: 1px solid #e5e7eb;">
          <h3 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Items Ordered</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f9fafb; border-bottom: 2px solid #e5e7eb;">
                <th style="padding: 12px 0; text-align: left; font-weight: 600; color: #374151;">Item</th>
                <th style="padding: 12px 0; text-align: center; font-weight: 600; color: #374151;">Qty</th>
                <th style="padding: 12px 0; text-align: right; font-weight: 600; color: #374151;">Price</th>
                <th style="padding: 12px 0; text-align: right; font-weight: 600; color: #374151;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${formatCartItemsHTML(data.cartItems)}
            </tbody>
          </table>
        </div>

        <!-- Order Summary -->
        <div style="padding: 30px; border-bottom: 1px solid #e5e7eb;">
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
              <span style="color: #374151;">Subtotal (${data.totalItems} items):</span>
              <span style="color: #374151; font-weight: 600;">${data.totalAmount.toLocaleString()} LKR</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #d1d5db;">
              <span style="color: #374151;">Shipping:</span>
              <span style="color: #059669; font-weight: 600;">Free</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: #1f2937; font-size: 18px; font-weight: bold;">Total:</span>
              <span style="color: #1f2937; font-size: 18px; font-weight: bold;">${data.totalAmount.toLocaleString()} LKR</span>
            </div>
          </div>
        </div>

        <!-- Next Steps -->
        <div style="padding: 30px; border-bottom: 1px solid #e5e7eb;">
          <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px; font-weight: 600;">What happens next?</h3>
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <ul style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.6;">
              <li style="margin-bottom: 8px;">We'll review your proof of purchase within 24 hours</li>
              <li style="margin-bottom: 8px;">Once verified, we'll prepare your order for ${data.attendingEvent ? 'pickup at NLDS 2025' : 'delivery'}</li>
              <li style="margin-bottom: 8px;">You'll receive updates via email about your order status</li>
              <li>If you have any questions, please contact us with your Order ID</li>
            </ul>
          </div>
        </div>

        <!-- Contact Information -->
        <div style="padding: 30px; background-color: #f9fafb;">
          <h4 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">Need Help?</h4>
          <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
            If you have any questions about your order, please contact us and include your Order ID: <strong>${data.orderId}</strong>
          </p>
          <p style="color: #6b7280; margin: 0; font-size: 14px;">
            Thank you for supporting NLDS 2025! 🎉
          </p>
        </div>

        <!-- Footer -->
        <div style="padding: 20px; text-align: center; background-color: #1f2937;">
          <p style="color: #9ca3af; margin: 0; font-size: 12px;">
            © 2025 NLDS. This is an automated message, please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: Omit<CustomerData, 'orderId'> = await request.json();
    
    // Generate unique order ID
    const orderId = generateOrderId();
    const customerData: CustomerData = { ...data, orderId };

    // Send email via Mailjet
    const emailRequest = await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_FROM_EMAIL!,
              Name: "NLDS 2025 Store"
            },
            To: [
              {
                Email: customerData.email,
                Name: customerData.name
              }
            ],
            Subject: `Order Confirmation - ${orderId} - NLDS 2025`,
            HTMLPart: generateEmailHTML(customerData)
          }
        ]
      });

    if (emailRequest.response.status === 200) {
      return NextResponse.json({ 
        success: true, 
        message: 'Confirmation email sent successfully',
        orderId: orderId
      });
    } else {
      console.error('Mailjet error:', emailRequest.response.data);
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to send confirmation email' 
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Error sending customer confirmation:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Internal server error' 
    }, { status: 500 });
  }
}