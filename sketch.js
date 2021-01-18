var playerCount=0;
var gameState=0;
var database;
var player;
var game;
var form;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  console.log(database);
  
  game = new Game();
  game.getState();
  console.log("hi")
  game.start();


}

function draw(){























} 