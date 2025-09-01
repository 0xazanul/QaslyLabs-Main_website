
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  const user = process.env.SENDER_EMAIL;
  const pass = process.env.SENDER_PASSWORD;

  console.log("[CONTACT API] env SENDER_EMAIL:", user);
  console.log("[CONTACT API] env SENDER_PASSWORD set:", !!pass);
  console.log("[CONTACT API] Incoming form data:", { name, email, message });

  if (!user || !pass) {
    console.error("[CONTACT API] Email credentials not set.");
    return NextResponse.json({ success: false, error: "Email credentials not set." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    console.log("[CONTACT API] Attempting to send email...");
    const info = await transporter.sendMail({
      from: `"${name}" <${user}>`,
      to: "security@qaslylabs.xyz",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    });
    console.log("[CONTACT API] Email sent! Nodemailer info:", info);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("[CONTACT API] Email send error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
