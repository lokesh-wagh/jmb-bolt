require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Basic transporter from environment variables
function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    console.warn('SMTP configuration missing in environment variables.');
  }

  return nodemailer.createTransport({
    host,
    port: Number(port) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user,
      pass,
    },
  });
}

app.post('/api/book', async (req, res) => {
  const { name, phone, email } = req.body || {};
  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'name, phone and email are required' });
  }

  const transporter = createTransporter();

  const toAddress = process.env.BOOKING_TO || process.env.SMTP_USER;

  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to: toAddress,
    subject: `New booking request from ${name}`,
    text: `New booking request:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\n`,
    html: `<p>New booking request:</p><ul><li><strong>Name:</strong> ${name}</li><li><strong>Phone:</strong> ${phone}</li><li><strong>Email:</strong> ${email}</li></ul>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info && info.messageId);
    res.json({ ok: true, messageId: info && info.messageId });
  } catch (err) {
    console.error('Failed to send email', err);
    res.status(500).json({ error: 'failed to send email', details: err && err.message });
  }
});

// Verify JWT token endpoint
app.post('/api/verify', (req, res) => {
  const authHeader = req.headers.authorization || '';
  let token = null;

  if (authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7);
  } else if (req.body && req.body.token) {
    token = req.body.token;
  }

  if (!token) {
    return res.status(400).json({ error: 'token required in Authorization Bearer header or body.token' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'JWT_SECRET not configured on server' });
  }

  try {
    const payload = jwt.verify(token, secret);
    return res.json({ ok: true, payload });
  } catch (err) {
    return res.status(401).json({ error: 'invalid token', details: err && err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Booking server listening on port ${PORT}`);
});
