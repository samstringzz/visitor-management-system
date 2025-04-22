import { Resend } from 'resend';

const resend = new Resend('re_BnMV5uo4_2C6nUnDvbM6odhh6CBsrLB4C');

export const sendApprovalEmail = async (booking) => {
  try {
    await resend.emails.send({
      from: 'your@domain.com',
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
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};