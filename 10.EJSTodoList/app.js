const express= require("express");
const bodyparser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

//day ladder
  if(currentDay === 0) {
    day = "sunday";
  }
  else if(currentDay === 1) {
    day = "monday";
  }
  else if(currentDay === 2) {
    day = "tuesday";
  }
  else if(currentDay === 3) {
    day = "wednesday";
  }
  else if(currentDay === 4) {
    day = "thursday";
  }
  else if(currentDay === 5) {
    day = "friday";
  }
  else if(currentDay === 6) {
    day = "saturday"
  }

  res.render("list", {DayName:day});
});

app.listen(3000, function() {
  console.log("server started at port 3000");
});
