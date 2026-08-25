import { NextResponse } from "next/server";

// Simple email regex pattern
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export async function POST(request: Request) {
  try {
    // 1. Enforce payload size limit (max 500KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 512000) {
      return NextResponse.json(
        { success: false, error: "Payload exceeds safe limit of 500KB." },
        { status: 413 }
      );
    }

    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      service,
      location,
      message,
      inquirySource,
      // Honeypot field for bot spam prevention
      botField,
    } = body;

    // 2. Automated Spam Check (Honeypot detection)
    if (botField) {
      console.warn("Spam detected: botField honeypot was populated.");
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    const finalName = name ? String(name).trim() : "";
    const finalEmail = email ? String(email).trim() : "";
    const finalPhone = phone ? String(phone).trim() : "";
    const finalCompany = company ? String(company).trim() : "";
    const finalService = service ? String(service).trim() : "Unspecified Services";
    const finalLocation = location ? String(location).trim() : "Not Specified";
    const finalMessage = message ? String(message).trim() : "";

    // 3. Validate Required Fields
    if (!finalName || !finalEmail || !finalPhone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // 4. Enforce Input Length Limits (Security check)
    if (finalName.length > 100) {
      return NextResponse.json({ success: false, error: "Name must not exceed 100 characters." }, { status: 400 });
    }
    if (finalEmail.length > 150) {
      return NextResponse.json({ success: false, error: "Email must not exceed 150 characters." }, { status: 400 });
    }
    if (finalPhone.length > 20) {
      return NextResponse.json({ success: false, error: "Phone number must not exceed 20 characters." }, { status: 400 });
    }
    if (finalCompany.length > 150) {
      return NextResponse.json({ success: false, error: "Company name must not exceed 150 characters." }, { status: 400 });
    }
    if (finalLocation.length > 150) {
      return NextResponse.json({ success: false, error: "Location must not exceed 150 characters." }, { status: 400 });
    }
    if (finalMessage.length > 3000) {
      return NextResponse.json({ success: false, error: "Message must not exceed 3000 characters." }, { status: 400 });
    }

    // 5. Format Validation
    if (!EMAIL_REGEX.test(finalEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    const phoneCleaned = finalPhone.replace(/[\s\+\-\(\)]/g, "");
    if (!/^\d{7,15}$/.test(phoneCleaned)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format. Must contain 7 to 15 digits." },
        { status: 400 }
      );
    }

    // 6. Sanitize HTML/Script tags to prevent XSS injection
    const sanitizeHTML = (str: string) => str.replace(/<[^>]*>/g, "");
    const cleanName = sanitizeHTML(finalName);
    const cleanEmail = sanitizeHTML(finalEmail);
    const cleanPhone = sanitizeHTML(finalPhone);
    const cleanCompany = sanitizeHTML(finalCompany);
    const cleanService = sanitizeHTML(finalService);
    const cleanLocation = sanitizeHTML(finalLocation);
    const cleanMessage = sanitizeHTML(finalMessage);

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.EMAIL_TO;
    const senderEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";
    const isDev = process.env.NODE_ENV !== "production";

    // 7. Fallback behavior for Local Development or Missing Config
    if (!apiKey || !recipientEmail) {
      console.log("-----------------------------------------");
      console.log(`[DEVELOPMENT INQUIRY LOG] Source: ${inquirySource || "Website Form"}`);
      console.log(`Name: ${cleanName}`);
      console.log(`Email: ${cleanEmail}`);
      console.log(`Phone: ${cleanPhone}`);
      console.log(`Company: ${cleanCompany}`);
      console.log(`Service: ${cleanService}`);
      console.log(`Location: ${cleanLocation}`);
      console.log(`Message: ${cleanMessage}`);
      console.log("-----------------------------------------");

      if (isDev) {
        return NextResponse.json(
          {
            success: true,
            message: "Inquiry received for local testing.",
            loggedLocally: true,
          },
          { status: 200 }
        );
      }

      // In Production but missing credentials -> Return specific failure error for debugging
      const missing = [];
      if (!apiKey) missing.push("RESEND_API_KEY");
      if (!recipientEmail) missing.push("EMAIL_TO");

      return NextResponse.json(
        {
          success: false,
          error: `Diagnostic: The Vercel server is missing the following environment variables: ${missing.join(", ")}. Please verify exact spelling and redeploy.`,
        },
        { status: 503 }
      );
    }

    // 8. Live Resend Integration (Native Fetch)
    const emailPayload = {
      from: `SSMPS Website <${senderEmail}>`,
      to: recipientEmail,
      subject: `SSMPS Corporate Proposal Inquiry: ${cleanService}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #081B33; border-bottom: 2px solid #C41E3A; padding-bottom: 10px; text-transform: uppercase;">New SSMPS Proposal Request</h2>
          <p>A new B2B inquiry was submitted through the SSMPS portal:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 180px;">Contact Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanCompany || "Not Specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${cleanPhone}">${cleanPhone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Selected Service:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; color: #C41E3A; font-weight: bold;">${cleanService}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Deployment Location:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${cleanLocation}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 4px; border-left: 4px solid #C41E3A;">
            <strong style="color: #081B33; display: block; margin-bottom: 5px;">Requirements / Notes:</strong>
            <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #555; white-space: pre-wrap;">${cleanMessage || "No detailed notes provided."}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 11px; color: #888; text-align: center; border-top: 1px solid #eaeaea; padding-top: 15px;">
            This inquiry was automatically dispatched by the SSMPS portal.
          </div>
        </div>
      `,
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    const resData = await res.json();

    if (!res.ok) {
      console.error("Resend API rejected transmission:", resData);
      return NextResponse.json(
        { success: false, error: "Failed to dispatch email via Resend API." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Inquiry successfully dispatched to SSMPS administration." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error processing inquiry:", error);
    return NextResponse.json(
      { success: false, error: "An internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed." }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ success: false, error: "Method not allowed." }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ success: false, error: "Method not allowed." }, { status: 405 });
}
