require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter;

function createTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('Error connecting to email server:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });

  return transporter;
}

async function sendEmail(to, subject, text = '', html = '') {
  try {
    createTransporter();

    const info = await transporter.sendMail({
      from: `"AgriGuardian" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { createTransporter, sendEmail };
