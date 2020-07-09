const express = require("express");
const https = require('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html');


});

app.post("/", function(req,res) {
  const city = req.body.cityName;
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=079bd2a2ea40a539a4c0839a4d401096'

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data); //entire json data for the whole document here
      const temprature = weatherData.main.temp
      const description = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon

      const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

      res.write('<h1>the weather is '+description+'</h1>');
      res.write('<p>the temprature is '+temprature+'</p>');
      res.write("<img src="+ imageURL +">");
      res.send();
    })
  })
});

app.listen(3000, function() {
  console.log("server running at port 3000");
});
