function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(200,400,50,50);
  movingRect.shapeColor = "red";
  Anvi = createSprite(600,100,100,100);
  Anvi.shapeColor = "white";
  
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  
 if(touch(Anvi,movingRect)) {
Anvi.shapeColor = "purple";
movingRect.shapeColor = "purple";
}
else {
Anvi.shapeColor = "white";
movingRect.shapeColor = "red";
}
 if(touch(fixedRect,movingRect)) {
fixedRect.shapeColor = "lime";
movingRect.shapeColor = "lime";
}
else {
fixedRect.shapeColor = "red";
movingRect.shapeColor = "red";
}




  drawSprites();
}


