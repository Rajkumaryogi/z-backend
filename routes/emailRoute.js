import express from "express";
import { sendEmail, sendEmailSub } from "../services/emailService.js";

const router = express.Router();
// Send Email subscribe
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    await sendEmailSub(email);
    res.json({ message: "✅ Email subscribed successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Send message
router.post("/send", async (req, res) => {
  try {
    const { name, email, summary } = req.body;
    await sendEmail(name, email, summary);
    res.json({ message: "✅ Email sent successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;