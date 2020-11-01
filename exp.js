const express = require('express');
const bodyParser = require('body-parser');
const client = require('./index.js');


let to =" ",from =" ", subject =" ", mailbody =" ";



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-mail', (req, res) => {
    to = req.body.to;
    from = req.body.from;
    subject = req.body.subject;
    mailbody = req.body.mailbody;  
    //res.send(req.body)
    console.log(to+" "+ from +" "+mailbody);
    client.readCredentials(to,from,subject,mailbody);
    //api.sendEmail(to,from,subject,mailbody);
    
    res.redirect('http://localhost:8080/send');
});


app.get('/send', (req,res)=> {
    res.send("WOrked!")
});


app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));