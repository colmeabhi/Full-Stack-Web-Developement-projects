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

app.listen(3000, function(){
  console.log("server started on server 3000");
});
