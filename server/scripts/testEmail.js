require('dotenv').config();
const notification = require('../services/notificationService');

(async () => {
  try {
    const to = process.env.EMAIL_USER;
    const name = 'Test User';

    console.log('Sending test registration email to', to);
    await notification.sendRegistrationEmail(to, name);
    console.log('Registration email sent.');

    console.log('Sending test login notification to', to);
    await notification.sendLoginNotification(to, name);
    console.log('Login notification sent.');

    console.log('Sending test pest alert to', to);
    await notification.sendPestAlertNotification(to, name, 'Test pest alert: Fall armyworm detected');
    console.log('Pest alert sent.');
  } catch (err) {
    console.error('Test email failed:', err);
    process.exitCode = 1;
  }
})();
