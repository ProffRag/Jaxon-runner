var runner, runnerAnime;
var path, pathImage;
function preload(){
  runnerAnime = loadAnimation('Runner-1.png','Runner-2.png');
  pathImage = loadImage('path.png');
function setup(){
  createCanvas(400,400);
  background('white');
  runner = createSprite(250, 350, 30, 90);
  runner.addAnimation('runner', runnerAnime);
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;
  var left = createSprite(10,400,10,400);
  left.visible = false;
  var right = createSprite(390,400,10,400);
  right.visible = false;
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  runner.velocityX = World.mouseX
  runner.collide(left&&right);
  drawSprites()
  
}
