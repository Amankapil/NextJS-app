import nodemailer from "nodemailer";

import { NextResponse } from "next/server";
import { json } from "next";


// const upload = multer({ dest: 'uploads/' });

export async function POST(req, res) {
  if (req.method === "POST") {
    // const { email,resume } = req.body;
    const file = req.body;
    console.log(file);

    if (!req.body || !req.body.emailData) {
      return NextResponse.json({
        message: "Missing email data in request body",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aman@hiringtech.in",
        pass: "hkhciawppvadmvyd",
        // hkhc iawp pvad mvyd
      },
    });

    const mailOptions = {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text || "", // Optional email body content
      attachments: [
        {
          filename: emailData.attachments[0].filename,
          content: emailData.attachments[0].content, // Base64 encoded resume content
          contentType: emailData.attachments[0].contentType,
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





