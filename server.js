import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const resend = new Resend('re_BnMV5uo4_2C6nUnDvbM6odhh6CBsrLB4C');

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    const { booking } = req.body;
    
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Changed this line to use Resend's default sender
      to: booking.visitorEmail,
      subject: 'Booking Approved - Visitor Management System',
      html: `
        <h1>Your Booking has been Approved!</h1>
        <p>Dear ${booking.visitorName},</p>
        <p>Your booking for ${booking.eventName} on ${booking.eventDate} has been approved.</p>
        <p>Please present the QR code below at the venue:</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=${booking.id}&size=200x200" alt="QR Code" />
        <p>Event Details:</p>
        <ul>
          <li>Event: ${booking.eventName}</li>
          <li>Date: ${booking.eventDate}</li>
          <li>Purpose: ${booking.purpose}</li>
        </ul>
      `
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});