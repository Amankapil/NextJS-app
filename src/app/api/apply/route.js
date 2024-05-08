// import multer from 'multer'
import nodemailer from 'nodemailer'
import fs from 'fs'
import { NextResponse } from 'next/server'
import multer from 'multer'

// Set up Multer with memory storage

// Set up Multer with disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'uploads'))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname)
    const name = path.basename(file.originalname, ext)
    cb(null, `${name}-${uniqueSuffix}${ext}`)
  }
})

const upload = multer({ storage })

export async function POST (req, res) {
  if (req.method === 'POST') {
    console.log(req.file)
    console.log(req.body)

    upload.single('resume')(req, res, async err => {
      if (err) {
        console.error('Error with Multer:', err)
        return res.status(500).json({ message: 'Error processing file' })
      }

      const { name } = req.body
      const resumeFile = req.file
      let passedValue = await new Response(req.body).text()
      let bodyreq = JSON.parse(passedValue)
      console.log(bodyreq)

      if (!name || !resumeFile) {
        //         return res.status(400).json({ message: 'Missing required fields' })
        console.log('no name and email coming')
      }

      console.log('Name:', name)
      //       console.log('Email:', email)
      console.log('Resume File:', resumeFile)

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'aman@hiringtech.in',
          pass: 'hkhciawppvadmvyd'
          // hkhc iawp pvad mvyd
        }
      })

      //       const resumeContent = fs.readFileSync(resumeFile.filepath)

      const mailData = {
        from: 'aman@hiringtech.in',
        to: 'amankapil60@gmail.com',
        subject: 'New Massage from website caerre page',
        text: `Name: ${name}`,
        attachments: [
          {
            filename: resumeFile,
            content: resumeFile
          }
        ]
      }

      try {
        // Send the email
        //         await transporter.sendMail(mailData)
        console.log('email sent')
        return NextResponse.json({
          message: 'Email sent successfully! line no. 50 run hui'
        })
      } catch (error) {
        console.error('Error sending email:', error)
        return res.status(500).json({ message: 'Error sending email.' }) // Use res.status().json() for error response
      }
    })
  } else {
    res.setHeader('Allow', ['POST'])
    return NextResponse.json({ message: 'bhai ye wala run ho ra h' })
  }
}
