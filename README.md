# Gmail-SendMail-API

1. To generate credentials.json, go to this link -> https://developers.google.com/gmail/api/quickstart/nodejs 
2. Install all the dependencies.
3. run node exp.js
4. make a POST request to localhost:8080/send-mail in the following format (URLencoded):
    {
      "to": "mail",
      "from" :"YOUR_MAIL",
      "subject" : "MAIL_SUBJECT",
      "mailbody" : "YOUR MAIL BODY"
    }
5. you will be prompted to login with your gmail account.
6. copy the code="......." from the URL and paste the copied code in the console.
7. MAIL SENT !!!
