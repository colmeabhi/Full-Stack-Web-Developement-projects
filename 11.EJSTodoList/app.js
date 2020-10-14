const express= require("express");
const bodyparser = require("body-parser");

const app = express();

let item = "";
let arr = [];

app.set('view engine', 'ejs');
//body parser acts as a middleware and allows us to get value from the html.
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let today = new Date();

  //Created an object to specify format for date
  let options = { weekday : "long", day : "numeric", month : "long" };

  let day = today.toLocaleDateString("en-us", options);

  res.render("list", {DayName:day, passedarr:arr}); // variable sent is DayName to be used in html. Needs to render at same time.
});

app.post("/", function(req, res) {
  // Body parser allow us to do that.
  item = req.body.newItem;
  arr.push(item);
  // redirects to the home route. Used to avoid diffrent timing renders of <%= %> tag
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("server started at port 3000");
});
