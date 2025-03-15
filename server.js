require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("✅ Server Running on PORT 5000"));

// Konfigurasi Nodemailer
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Cek apakah email bisa dikirim
contactEmail.verify((error) => {
  if (error) {
    console.log("❌ Email Transport Error:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// API Endpoint
router.post("/contact", (req, res) => {
  console.log("📩 Received Contact Data:", req.body);

  const { firstName, lastName, email, phone, message } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${fullName}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("❌ Error Sending Email:", error);
      return res.status(500).json({ code: 500, message: "Error sending email" });
    }
    console.log("✅ Email Sent:", info.response);
    return res.status(200).json({ code: 200, message: "Message sent successfully" });
  });
});
