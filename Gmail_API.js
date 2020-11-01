const nodemailer = require("nodemailer");
const fs = require('fs')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const credential = require('./credentials.json');
const { callbackPromise } = require("nodemailer/lib/shared");


exports.sendEmail = function(t,fr,sub,mbody) {

    //let refresh_token 
    const from = fr;
    const to = t;
    const subject = sub;
    const body = mbody;
    const clientId = credential.web.client_id;
    const clientSecret = credential.web.client_secret
    const redirectURL = credential.web.redirect_uris[0]

    
    fs.readFile('token.json', (err, token,next) => {
        if (err) console.log(err)
        else{
         var access = JSON.parse(token);
         const refresh_token = access.refresh_token;

         
        const oauth2Client = new OAuth2(
            clientId,      // Client ID
            clientSecret, // Client Secret
            redirectURL // Redirect URL
        );

        oauth2Client.setCredentials({
            refresh_token: refresh_token
        });

        const accessToken = oauth2Client.getAccessToken()
        const smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: from, 
                clientId: clientId,
                clientSecret: clientSecret,
                refreshToken: refresh_token,
                accessToken: accessToken
            }});

            const mailOptions = {
                from: from,
                to: to,
                subject: subject,
                text : body
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console.log(error) : console.log(response);
            smtpTransport.close();
        });
        
        }
    })
        
}
