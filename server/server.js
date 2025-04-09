
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors()); 
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
   
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your SMTP server
      port: 465, // Replace with your SMTP port
      secure: true,
      auth: {
        user: "your-email@gmail.com", // Replace with your email address
        pass: "your-email-password", // Replace with your email password or app password
      },
    });

    // Define the email message
    let mailOptions = {
      from: "your-email@gmail.com", // Replace with your email address
      to: "your-email@gmail.com", // Replace with your email address
      subject: "New Contact Form Submission",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };

  
    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});