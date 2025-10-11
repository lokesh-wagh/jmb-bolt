# JMB Booking Server

Simple Node/Express server that exposes a POST /api/book endpoint and sends an email using nodemailer.

Setup

1. Install dependencies

```bash
cd server
npm install
```

2. Copy environment example and fill values

```bash
cp .env.example .env
# edit .env and set SMTP_HOST, SMTP_USER, SMTP_PASS, etc.
```

3. Start the server

```bash
npm run dev   # requires nodemon
# or
npm start
```

Endpoint

POST /api/book

Body (JSON):

{
  "name": "John Doe",
  "phone": "+911234567890",
  "email": "john@example.com"
}

Example curl:

```bash
curl -X POST http://localhost:4000/api/book \
  -H 'Content-Type: application/json' \
  -d '{"name":"John","phone":"12345","email":"a@b.com"}'
```
