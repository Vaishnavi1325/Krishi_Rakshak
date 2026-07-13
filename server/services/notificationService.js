const emailQueue = require('./emailQueue');

async function sendRegistrationEmail(userEmail, name) {
  const subject = 'Welcome to AgriGuardiann';
  const text = `Hello ${name},\n\nThank you for registering at AgriGuardiann. We're excited to have you on board!\n\nBest regards,\nAgriGuardiann Team`;
  const html = `<p>Hello ${name},</p><p>Thank you for registering at AgriGuardiann. We're excited to have you on board!</p><p>Best regards,<br/>AgriGuardiann Team</p>`;

  // Enqueue email for batched sending
  emailQueue.enqueue(userEmail, subject, text, html);
  return Promise.resolve();
}

async function sendLoginNotification(userEmail, name) {
  const subject = 'New sign-in to your account';
  const text = `Hello ${name},\n\nWe noticed a sign-in to your account. If this was you, no action is needed. If not, please secure your account.`;
  const html = `<p>Hello ${name},</p><p>We noticed a sign-in to your account. If this was you, no action is needed. If not, please secure your account.</p>`;

  emailQueue.enqueue(userEmail, subject, text, html);
  return Promise.resolve();
}

async function sendPestAlertNotification(userEmail, name, alertDetails) {
  const subject = 'Pest Alert Notification';
  const text = `Hello ${name},\n\nA pest alert has been issued: ${alertDetails}\n\nPlease check the app for details.`;
  const html = `<p>Hello ${name},</p><p>A pest alert has been issued:</p><p>${alertDetails}</p><p>Please check the app for details.</p>`;

  emailQueue.enqueue(userEmail, subject, text, html);
  return Promise.resolve();
}

module.exports = {
  sendRegistrationEmail,
  sendLoginNotification,
  sendPestAlertNotification,
};
