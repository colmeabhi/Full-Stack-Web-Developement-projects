//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/signup.html');
});

// failure route which takes us back to home route
app.post('/failure', function(req,res) {
  res.redirect('/');
});

app.post('/', function(req, res) {
  // never to be changed so made const.
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;

// member to bad added as an array
  var data = {
    'members': [ {
      email_address: email, // see the docs
      status: "subscribed", //see the docs on what this field can take
      merge_fields: { // see the settings and merge fields to take inputs and set customised entry var names for the inputs.Taking default FNAME and LNAME here
        FNAME: fname,
        LNAME: lname
      }
    }
  ],
  };

  // Now to convert this js in json as the input taken by api is in json
  const jsonData = JSON.stringify(data);
  // Make your url see how to add to the list you have then type your list id as well as see the server which you got on you api key add it as usX x=server no.
  const url = "https://us10.api.mailchimp.com/3.0/lists/844be6acf3";
  // now the req module just gets the data from the api we need to post the data too so we saw docs and added a method to the get req. here we set that method
  const options = {
    method: "POST",
  // this is added for authentication basic authentication
    auth: "colmeabhi:b4f28b3d323c3b2a8345aa90ef481a99-us10"
  };
  // Now we need to post the data to the external module see the docs for https.request to post the data
  // in order to send the data we need to put it into a constant then write that constant to the mailchimp server
  const request = https.request(url, options, function(response) {
    console.log('dekh na bro'+response.statusCode);
    if(response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    }
    else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
       // converts text into js object
    });
  });

  request.write(jsonData);
  // specify request has ended
  request.end();

});





app.listen(process.env.PORT || 3000, function() {
  console.log("server running at port 3000");
});
// api key
// b4f28b3d323c3b2a8345aa90ef481a99-us10

// list id:
// 844be6acf3
