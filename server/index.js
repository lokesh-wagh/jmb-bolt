require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// In-memory user store: Map keyed by email
const users = new Map();

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

// POST /api/register - store user in-memory and email verification token
app.post('/api/register', async (req, res) => {
  const { name, phone, email } = req.body || {};
  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'name, phone and email are required' });
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(String(email))) {
    return res.status(400).json({ error: 'invalid email' });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'JWT_SECRET not configured on server' });
  }

  // create or update user entry
  const user = {
    name,
    phone,
    email,
    emailVerified: false,
    createdAt: new Date().toISOString(),
  };
  users.set(email, user);
  console.log(user)
  // create verification token (short expiry)
  const token = jwt.sign({ email }, secret, { expiresIn: process.env.VERIFY_TOKEN_EXP || '1h' });

  // send token to user's email
  const transporter = createTransporter();
  const mailOptions = {
    from:  process.env.SMTP_USER,
    to: email,
    subject: `Your verification token for JMB Resort`,
    text: `Hello ${name},\n\nPlease verify your email by using this token:\n\n${token}\n\nOr visit: ${process.env.VERIFY_URL || 'http://localhost:4000/api'}/verify?token=${token}\n\nThis link expires in 1 hour.`,
    html: `<p>Hello ${name},</p><p>Please verify your email by using this token:</p><pre>${token}</pre><p>Or click: <a href="${process.env.VERIFY_URL|| 'http://localhost:4000/api'}/verify?token=${token}">Verify email</a></p><p>This link expires in 1 hour.</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Verification email sent to', email, info && info.messageId);
    return res.json({ ok: true, message: 'verification email sent', messageId: info && info.messageId });
  } catch (err) {
    console.error('Failed to send verification email', err);
    return res.status(500).json({ error: 'failed to send verification email', details: err && err.message });
  }
});

// POST /api/book - send booking email, optional 'to' in body
app.post('/api/book', async (req, res) => {
  const { name, phone, email, to } = req.body || {};
  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'name, phone and email are required' });
  }

  let toAddress = process.env.BOOKING_TO || process.env.SMTP_USER;
  if (to) {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(String(to))) {
      return res.status(400).json({ error: 'invalid to email address' });
    }
    toAddress = to;
  }

  const transporter = createTransporter();

  const mailOptions = {
    from:  process.env.SMTP_USER,
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

// GET /api/verify - verify token, mark user verified, optional 'to' to email payload
// Supports: GET /api/verify?token=...&to=...
// Also accepts Authorization: Bearer <token> or JSON body { token, to } for POST usage
app.get('/api/verify', async (req, res) => {
  // determine if caller expects HTML (browser) or JSON (API)
  const wantsHtml = (req.accepts && req.accepts('html')) || (req.query && req.query.format === 'html');

  // prefer query param, then Authorization header, then body.token
  let token = req.query && req.query.token;
  if (!token) {
    const authHeader = req.headers.authorization || '';
    if (authHeader.startsWith('Bearer ')) token = authHeader.slice(7);
  }
  if (!token && req.body && req.body.token) token = req.body.token;

  if (!token) {
    const msg = 'token required via ?token=, Authorization Bearer header, or body.token';
    if (wantsHtml) return res.status(400).send(renderHtml('Verification error', `<p>${msg}</p>`));
    return res.status(400).json({ error: msg });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    const msg = 'JWT_SECRET not configured on server';
    if (wantsHtml) return res.status(500).send(renderHtml('Server error', `<p>${msg}</p>`));
    return res.status(500).json({ error: msg });
  }

  try {
    const payload = jwt.verify(token, secret);

    // if payload contains email, mark user verified in the in-memory store
    if (payload && payload.email) {
      const existing = users.get(payload.email) || null;
      if (existing) {
        existing.emailVerified = true;
        existing.verifiedAt = new Date().toISOString();
        users.set(payload.email, existing);
      } else {
        // create a minimal entry if none existed
        users.set(payload.email, { email: payload.email, emailVerified: true, verifiedAt: new Date().toISOString() });
      }
    }

    // optional 'to' address: support ?to= in query or body.to
    const to = (req.query && req.query.to) || (req.body && req.body.to);
    if (to) {
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(String(to))) {
        const msg = 'invalid to email address';
        if (wantsHtml) return res.status(400).send(renderHtml('Verification error', `<p>${msg}</p>`));
        return res.status(400).json({ error: msg });
      }

      const transporter = createTransporter();
      const mailOptions = {
        from: process.env.SMTP_USER,
        to,
        subject: `JWT verification result`,
        text: `Token verified. Payload:\n\n${JSON.stringify(payload, null, 2)}`,
        html: `<p>Token verified. Payload:</p><pre>${JSON.stringify(payload, null, 2)}</pre>`,
      };

      try {
        await transporter.sendMail(mailOptions);
        if (wantsHtml) return res.send(renderHtml('Verified', `<p>Token verified. A result email has been sent to <strong>${to}</strong>.</p>`));
        return res.json({ ok: true, payload, email: { to, queued: true } });
      } catch (mailErr) {
        console.error('Failed to send verification email', mailErr);
        const msg = 'failed to send verification email';
        if (wantsHtml) return res.status(500).send(renderHtml('Verification error', `<p>${msg}</p><pre>${mailErr && mailErr.message}</pre>`));
        return res.status(500).json({ ok: false, error: msg, details: mailErr && mailErr.message });
      }
    }
    console.log(users)
    // Default success response
    if (wantsHtml) {
      return res.send(renderHtml('Verified', `<p>Your email <strong>${(payload && payload.email) || 'unknown'}</strong> has been successfully verified.</p>`));
    }

    return res.json({ ok: true, payload });
  } catch (err) {
    const msg = 'invalid token';
    if (wantsHtml) return res.status(401).send(renderHtml('Verification failed', `<p>${msg}</p><pre>${err && err.message}</pre>`));
    return res.status(401).json({ error: msg, details: err && err.message });
  }
});

// small helper to render a minimal HTML page
function renderHtml(title, bodyHtml) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title><style>body{font-family:Inter,system-ui,Arial,Helvetica,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f7fafc;color:#0f172a} .card{background:white;padding:28px;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.08);max-width:720px;text-align:center} a{color:#0ea5e9;text-decoration:none}</style></head><body><div class="card"><h1 style="margin:0 0 12px">${escapeHtml(title)}</h1><div>${bodyHtml}</div><p style="margin-top:18px;font-size:13px;color:#475569">If you were not expecting this, ignore this message.</p></div></body></html>`;
}

// basic escaping to avoid injection when interpolating
function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/[&<>\"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
  });
}


app.listen(PORT, () => {
  console.log(`Booking server listening on port ${PORT}`);
});
