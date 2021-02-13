var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(200,200,50,20)
    object2=createSprite(100,200,50,20);
}

function draw() {
  background(0,0,0);  
  object2.velocityX=3
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(object1,object2)){
object1.shapeColor="blue";
object2.shapeColor="red";
  }
  bounceOff(object1,object2);
  drawSprites();
}
