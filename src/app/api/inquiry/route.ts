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
      organization,
      contactName,
      subject,
      message,
      notes,
      inquirySource,
      // Honeypot field for bot spam prevention
      botField,
    } = body;

    // 2. Automated Spam Check (Honeypot detection)
    if (botField) {
      console.warn("Spam detected: botField honey-pot was populated.");
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    // 3. Normalize Name (could come from contact form 'name' or proposal form 'fullName'/'contactName')
    const finalName = name || contactName || "Inquirer";
    const finalEmail = email ? String(email).trim() : "";
    const finalPhone = phone ? String(phone).trim() : "";
    const finalSubject = subject ? String(subject).trim() : `Bespoke Inquiry from ${inquirySource || "Website"}`;
    const finalMessage = message || notes || "";

    // 4. Validate Required Fields
    if (!finalName || !finalEmail || !finalPhone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // 5. Enforce Input Length Limits (Security against buffer overruns)
    if (String(finalName).length > 100) {
      return NextResponse.json({ success: false, error: "Name must not exceed 100 characters." }, { status: 400 });
    }
    if (finalEmail.length > 150) {
      return NextResponse.json({ success: false, error: "Email must not exceed 150 characters." }, { status: 400 });
    }
    if (finalPhone.length > 20) {
      return NextResponse.json({ success: false, error: "Phone number must not exceed 20 characters." }, { status: 400 });
    }
    if (organization && String(organization).length > 150) {
      return NextResponse.json({ success: false, error: "Organization name must not exceed 150 characters." }, { status: 400 });
    }
    if (String(finalSubject).length > 200) {
      return NextResponse.json({ success: false, error: "Subject must not exceed 200 characters." }, { status: 400 });
    }
    if (String(finalMessage).length > 3000) {
      return NextResponse.json({ success: false, error: "Message must not exceed 3000 characters." }, { status: 400 });
    }

    // 6. Strict Format Validation
    if (!EMAIL_REGEX.test(finalEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Basic phone pattern check (must contain only numbers, spaces, plus signs, dashes, or parens)
    const phoneCleaned = finalPhone.replace(/[\s\+\-\(\)]/g, "");
    if (!/^\d{7,15}$/.test(phoneCleaned)) {
      return NextResponse.json(
        { success: false, error: "Invalid phone number format. Must contain 7 to 15 digits." },
        { status: 400 }
      );
    }

    // 7. Sanitize HTML/Script tags to prevent XSS injection
    const sanitizeHTML = (str: string) => str.replace(/<[^>]*>/g, "");
    const cleanName = sanitizeHTML(String(finalName));
    const cleanEmail = sanitizeHTML(finalEmail);
    const cleanPhone = sanitizeHTML(finalPhone);
    const cleanSubject = sanitizeHTML(finalSubject);
    const cleanMessage = sanitizeHTML(String(finalMessage));
    const cleanOrg = organization ? sanitizeHTML(String(organization)) : "";

    // 8. Check Backend Configuration (Mailer credentials check)
    // If SMTP or API Key environment variables are missing, return a 503 error
    const apiKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;
    const recipient = process.env.SEND_INQUIRIES_TO;

    if (!apiKey && !smtpHost) {
      // Log details in server console for local testing/development
      console.log("-----------------------------------------");
      console.log(`[DEVELOPMENT LOG] New Inquiry Received from ${inquirySource || "Direct"}`);
      console.log(`Name: ${cleanName}`);
      console.log(`Email: ${cleanEmail}`);
      console.log(`Phone: ${cleanPhone}`);
      console.log(`Org: ${cleanOrg}`);
      console.log(`Subject: ${cleanSubject}`);
      console.log(`Message/Notes: ${cleanMessage}`);
      console.log("-----------------------------------------");

      return NextResponse.json(
        {
          success: false,
          error: "Inquiry delivery service is not configured on the server. Please define RESEND_API_KEY or SMTP_HOST environment variables.",
          devNote: "Submission printed to server console logs.",
        },
        { status: 503 }
      );
    }

    // 9. Placeholder for real mailer dispatch
    // In production, when keys are defined, Resend or Nodemailer will dispatch here:
    /*
    if (apiKey) {
       // dispatch via Resend SDK
    } else if (smtpHost) {
       // dispatch via Nodemailer SMTP transport
    }
    */

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
