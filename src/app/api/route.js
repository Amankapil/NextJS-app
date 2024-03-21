// import nodemailer from "nodemailer";

// export const config = {
//   api: {
//     bodyParser: {
//       sizeLimit: "1mb",
//     },
//   },
// };

// export async function POST(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   // Ensure that the request body is parsed as JSON
//   const { name, email, position, resume } = req.body;

//   try {
//     // Create a nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "amankapil60@gmail.com", // Replace with your own email address
//         pass: "czxrbthlorqlfxkt", // Replace with your own email password
//       },
//     });

//     // Send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: "rcky876@gmail.com", // Sender address
//       to: "aman@hiringtech.in", // List of recipients
//       subject: "Job Application", // Subject line
//       text: `Name: ${name}\nEmail: ${email}\nPosition Applied: ${position}\nResume: ${resume}`, // Plain text body
//     });

//     console.log("Message sent: %s", info.messageId);

//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error occurred while sending email:", error);
//     return res.status(500).json({ message: "Failed to send email" });
//   }
// }
