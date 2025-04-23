import emailjs from '@emailjs/browser';

export const sendApprovalEmail = async (booking) => {
  try {
    // Enhanced validation
    if (!booking) {
      console.error('Booking object is missing');
      return false;
    }

    if (!booking.visitorEmail) {
      console.error('Booking email validation failed:', {
        hasBooking: !!booking,
        bookingData: booking
      });
      return false;
    }

    const templateParams = {
      from_name: "Visitor Management System",
      to_email: booking.visitorEmail.trim(),
      reply_to: booking.visitorEmail.trim(),
      to_name: booking.visitorName || 'Visitor',
      event_name: booking.eventName || 'Event',
      event_date: booking.eventDate || 'Not specified',
      purpose: booking.purpose || 'Not specified',
      qr_code: booking.id, 
      email: booking.visitorEmail.trim()
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      'service_7nzbbvg', 
      'template_1tn9twm',
      templateParams,
      'B_c1y_fXLLoVChR5E' 
    );

    if (response.status === 200) {
      return true;
    }
    throw new Error('Failed to send email');
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};