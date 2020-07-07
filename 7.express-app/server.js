// jshint esversion:6

const express = require("express");
const app = express();

// routes
app.get("/", function(req,res) {
  res.send("<h1> its working, Here's a response </h1>");  // response to the browser
  console.log(req); //just to check the request the browser sent
});

app.get("/contact", function(req,res) {
  res.send("contact me at ahirraoabhishek007@gmail.com");
});

app.get("/about", function(req,res) {
  res.send("hey my name is abhishek and i am a beginner in web-developement");
});

app.get("/hobbies", function(req,res) {
  res.send("basketball, code")
});

app.listen("3000", function() {
  console.log("Server started on port 3000");
});
