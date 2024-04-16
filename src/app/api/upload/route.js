import nodemailer from "nodemailer";

import { NextResponse } from "next/server";
import { json } from "next";

export async function POST(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    const { resume } = req.file;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aman@hiringtech.in",
        pass: "hkhciawppvadmvyd",
        // hkhc iawp pvad mvyd
      },
    });

    const mailOptions = {
      from: "aman@hiringtech.in",
      to: "amankapil60@gmail.com",
      subject: "New Resume Submission",
      text: "Please find attached the resume.",
      attachments: [
        {
          filename: resume,
          content: resume.data,
          contentType: "application/pdf", // Set the content type
          encoding: "base64",
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
