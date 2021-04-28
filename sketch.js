var fixedRect, movingRect;
var car , wall
var shape , size
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(70,400,40,10)
  car.shapeColor = "blue"
  wall = createSprite(600,100,500,40)
  wall.shapeColor = "yellow"
  shape = createSprite(300,50,60,80)
  shape.shapeColor = "pink"
  size = createSprite(300,150,60,80)
  size.shapeColor = "purple"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  car.x = World.mouseX;
  car.y = World.mouseY;
  shape.x = World.mouseX;
  shape.y = World.mouseY;
  bounceOff(shape,size);
  if(isTouching(car,wall)){
    car.shapeColor = "red"
    wall.shapeColor = "red"
  }
  if(isTouching(fixedRect,movingRect)){
    background(140)
  }
  drawSprites();
}


function isTouching(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true
 
}
else {
  return false
}
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}