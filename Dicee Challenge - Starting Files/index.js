var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var path = 'dice'+ randomNumber1 + '.png';
var imgPath = 'images/' + path;

var path2 = 'dice'+ randomNumber2 + '.png';
var imgPath2 = 'images/' + path2;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgPath);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgPath2);

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = 'Player1 wins <====';
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = 'Draw';

}
else {
  document.querySelector("h1").innerHTML = 'Player2 wins ====>';
}
