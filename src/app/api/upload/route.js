// import multer from 'multer';
// import nodemailer from 'nodemailer';
// // import { json } from 'next/dist/server/response';

// const upload = multer({ dest: 'uploads/' });

// export async function POST(req, res) {
//   upload.single('file')(req, res, async (err) => {
//     if (err) {
//       console.error('Error uploading file:', err);
//       return res.status(500).json({ error: 'Error uploading file' });
//     }

//     // Check if req.file exists
//     if (!req.file) {
//       console.error('No file uploaded');
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     const { path: filePath, originalname } = req.file;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'aman@hiringtech.in',
//         pass: 'hkhciawppvadmvyd',
//       },
//     });

//     const mailData = {
//       from: 'aman@hiringtech.in',
//       to: 'amankapil60@gmail.com',
//       subject: 'New Message from website career page',
//       attachments: [
//         {
//           filename: originalname,
//           path: filePath,
//         },
//       ],
//     };

//     try {
//       // Send the email
//       await transporter.sendMail(mailData);
//       return res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ message: 'Error sending email.' });
//     }
//   });
// }
