import nodemailer from "nodemailer";
import { google } from "googleapis";
import { OAuth2Client } from 'google-auth-library';

export async function POST(req, res) {
  if (req.method === "POST") {
    const { date, time, duration, emails } = req.body; // Parse JSON data directly
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);
    console.log(bodyreq);

    // const pdfBase64 = bodyreq.resume.toString("base64");
    // const resumeContent = Buffer.from(resume, "base64");
    // Create a Nodemailer transporter using SMTP transport

    const calendar = google.calendar({
      version: "v3",
      auth: "619033626494-6it1qor9arbiendfv4q7ehgl3bpbdb22.apps.googleusercontent.com", 
      
      // Replace with your Google Auth object
    });

    const startTime = new Date(`${date}T${time}:00`);
    const endTime = new Date(startTime.getTime() + 30 * 60000);
    const event = await calendar.events.insert({
      calendarId: "primary",
      resource: {
        summary: "Meeting",
        start: {
          dateTime: startTime.toISOString(),
          timeZone: "Asia/Kolkata", // India/Madras is deprecated, so using Asia/Kolkata
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: "Asia/Kolkata",
        },
      },
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "aman@hiringtech.in",
        pass: "hkhciawppvadmvyd",
        // hkhc iawp pvad mvyd
      },
    });

    const mailData = {
      from: bodyreq.email,
      to: "hr@hiringtech.in",
      subject: "New Massage from website caerre page ",
      //   text: `Name: ${bodyreq.name}\nEmail: ${bodyreq.email}\nResume-Link: ${bodyreq.resume}\nConact: ${bodyreq.number}\nexperience: ${bodyreq.experience}\nCTC: ${bodyreq.CTC}\nECTC: ${bodyreq.ECTC}\nlocation: ${bodyreq.location}\nNotice-Period: ${bodyreq.Notice}\nPosition:${bodyreq.position}`,
      text: `Here's the invitation link for the meeting: ${event.data.htmlLink}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailData);
      return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error scheduling meeting:", error);
      res
        .status(500)
        .json({ error: "An error occurred while scheduling the meeting." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
