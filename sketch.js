var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30,);
  box.shapeColor="black";
}

function draw() {
  background("lightblue");
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x=box.position.x+5;
    background("green");
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x=box.position.x-5;
    background("yellow");
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y=box.position.y-5;
    background("orange");
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y=box.position.y+5;
    background("red");
  }
  drawSprites();
}