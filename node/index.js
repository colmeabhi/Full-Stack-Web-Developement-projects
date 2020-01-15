//jshint esversion:6
var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

var supervillains = require('supervillains');
var sv = supervillains.random();
console.log(sv);
//=> 'Mud Pack'
