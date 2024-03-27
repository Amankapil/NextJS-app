import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { json } from "next";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { name, email, resume } = req.body; // Parse JSON data directly
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);
    console.log(bodyreq);

    // const pdfBase64 = bodyreq.resume.toString("base64");
    // const resumeContent = Buffer.from(resume, "base64");

    // Create a Nodemailer transporter using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "amankapil60@gmail.com",
        pass: "czxrbthlorqlfxkt",
      },
    });
    const mailData = {
      from: email,
      to: "aman@hiringtech.in",
      subject: "New Resume Submission",
      text: `Name: ${bodyreq.name}\nEmail: ${bodyreq.email}\nResume-Link: ${bodyreq.resume}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailData);
      return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Error sending email." }); // Use res.status().json() for error response
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
