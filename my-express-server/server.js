//jshint esversion:6

const express = require('express');

const app = express();

app.get('/',function( req, res) { //gets the request from browser to the '/' root and then invokes the function()
  res.send("<h1>helloman</h1>"); //can send html too
});
app.get('/contactme',function( req, res) { //set routes for pages
  res.send("<h1>see me at ahirraoabhishek007@gmail.com</h1>"); //can send html too
});
app.get('/about',function( req, res) { //set route
    res.send("i am a 19yrs haha nodemon work did nodemon work? old cse junior at frcrce"); //can send html too
});

app.listen(3000, function() { // gets ready to listen from the browser.
  console.log("server started on port 3000");
});
