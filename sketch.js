function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200,400,50,50);
  movingRect.shapeColor = "red";
  
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  
  if(movingRect.x - fixedRect.x < 
fixedRect.width/2 + movingRect.width/2 && 
fixedRect.x - movingRect.x < 
fixedRect.width/2 + movingRect.width/2 &&
movingRect.y - fixedRect.y <
fixedRect.height/2 + movingRect.height/2 &&
fixedRect.y - movingRect.y < 
fixedRect.height/2 + movingRect.height/2) {
fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
}

else {
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";
}




  drawSprites();
}