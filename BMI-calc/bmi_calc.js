//jshint esversion:6
const express = require('express');
const bodyParser = require("body-Parser");

const app = express();
app.use(bodyParser.urlencoded({extened:true}));

app.get('/',function(req,res){
  res.sendfile(__dirname + "/index.html");
});

app.post('/', function(req,res){
  var height = Number(req.body.firstvar);
  var weight = Number(req.body.secondvar);

  var result = weight/(height*height);
  res.send("the result of the BMI calculator is" + result);
});

app.get('/index1',function( req, res) { //gets the request from browser to the '/' root and then invokes the function()
  res.sendFile(__dirname + "/index1.html"); //can send html files with the res.sendFile method
});

app.post('/index1',function(req,res) {
  var num1 = Number(req.body.n1); //gets the value of n1 from the html file and converts it into a number then stores in num1
  var num2 = Number(req.body.n2);

  var result = num1 + num2;
  res.send("The result sum of the calculator is " + result);
});

app.listen(3000, function(){
  console.log("server started on server 3000");
});
