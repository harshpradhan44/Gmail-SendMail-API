const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;


const oauth2Client = new OAuth2(
    "311677438815-s5qrkc2d2j6p9gi4siql76hrh8qiq0tf.apps.googleusercontent.com",
    "oXDKQ6mpzWzxV1PeQRdy8Yh-", // Client Secret
    "http://localhost:8000/callback" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: "1//0gQ7aHjpSCGcRCgYIARAAGBASNwF-L9IrpzDQFXkeUDDFqRGKOBCgFgj4sz_croGH3DxNVUCsXasMQ4h9ZGYWyj01RgYacnuKmaE"
});

const accessToken = oauth2Client.getAccessToken()
const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "harsh.pradhan44@gmail.com", 
         clientId: "311677438815-s5qrkc2d2j6p9gi4siql76hrh8qiq0tf.apps.googleusercontent.com",
         clientSecret: "oXDKQ6mpzWzxV1PeQRdy8Yh-",
         refreshToken: "1//0gQ7aHjpSCGcRCgYIARAAGBASNwF-L9IrpzDQFXkeUDDFqRGKOBCgFgj4sz_croGH3DxNVUCsXasMQ4h9ZGYWyj01RgYacnuKmaE",
         accessToken: accessToken
    }});

    const mailOptions = {
        from: "harsh.pradhan44@gmail.com",
        to: "harsh.pradhan44@gmail.com",
        subject: "Node.js Email with Secure OAuth",
        generateTextFromHTML: true,
        html: "<b>test</b>"
   };

   smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});