const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Heyo world')
});


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webdesigntestmail123@gmail.com',
    pass: 'Niklas123'
  }
});

var mailOptions = {
  from: 'webdesigntestmail123@gmail.com',
  to: 'webdesigntestmail123@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});