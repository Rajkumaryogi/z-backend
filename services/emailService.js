import nodemailer from "nodemailer";

export async function sendEmail(name,email, summary) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `<${process.env.EMAIL_USER}>`,
    to: email,
    subject: `"Client"<${name}>`,
    text: summary
  });
}

export async function sendEmailSub(email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })
  await transporter.sendMail({
    from: `<${process.env.EMAIL_USER}>`,
    to: email,
    subject: `<${process.env.EMAIL_SENDER_NAME}>`,
    text: "Thanks for subscribe us"
  });
  
}