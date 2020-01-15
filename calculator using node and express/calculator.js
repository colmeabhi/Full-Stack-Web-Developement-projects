//jshint esversion:6
const express = require('express');
const bodyParser = require("body-Parser"); // allows us to send html inserted data


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function( req, res) { //gets the request from browser to the '/' root and then invokes the function()
  res.sendFile(__dirname + "/index.html"); //can send html files with the res.sendFile method
});

app.post('/',function(req,res) {
  var num1 = Number(req.body.n1); //gets the value of n1 from the html file and converts it into a number then stores in num1
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result of the calculator is " + result);
});

app.listen(3000, function() { // gets ready to listen from the browser.
  console.log("server started on port 3000");
});
