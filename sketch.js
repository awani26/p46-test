var spaceCraft, alienShip, spaceCraftImg, alienShipImg, backgroundImg, spaceCraftGroup, alienShipGroup ;

var laserX=10;
var laser=[];
var score=0;
var laser2=[];

function preload(){

 spaceCraftImg = loadImage("spacecraft1.png");
  alienShipImg = loadImage("spaceship-304073_960_720.png");
  backgroundImg = loadImage("spacebg.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  spaceCraft = createSprite(displayWidth-1000, displayHeight-500, 50, 50);
  spaceCraft.addImage("spaceCraft",spaceCraftImg);
 spaceCraft.scale=0.3;
 laserLight2()
 
}


function draw() {
  //background("blue");  
  background(backgroundImg);

  if(keyDown(UP_ARROW)){
    spaceCraft.y -= 5; 
  }
  if(keyDown(DOWN_ARROW)){
  spaceCraft.y += 5
  }
  if(keyDown(LEFT_ARROW)){
  spaceCraft.x -= 5;
  }
  
  if(keyDown(RIGHT_ARROW)){
  spaceCraft.x += 5;
  }

  if(keyDown("space")){
  laser = laserLight2();

    }

  //if(laser.isTouching(spaceCraft))
  //spaceCraftGroup.destroyEach();
  //laser.destroyEach();

   //if(laser.isTouching(spaceCraft))
  //spaceCraftGroup.destroyEach();
  //laser.destroyEach();

  text("score: " + score, 376, 20);
  textSize(100);

  

  spawnalienShip();
  drawSprites();
}

function spawnalienShip(){
  if(frameCount%60===0){
    ay = Math.round(random(100,800))
    ax = Math.round(random(800,1200))
    alienShip = createSprite(ax, ay, 50, 50);
    //alienShip.shapeColor="red"
    alienShip.addImage("alienShip",alienShipImg);
    alienShip.scale=0.1
    laserLight()
  }

  
}

function laserLight(){
  var a=1;
for(var i=0;i<5;i++){
  laser = createSprite(ax,ay,50,5) 
  laser.shapeColor = "red"
  if(frameCount%1000===0){
    laserX=laser[i].velocityX + 0.25
    
  }
  laser.velocityX=laserX*-1
//laser[i].shapeColor = 166+(i*10)


console.log(a++)
console.log(laser.x + "," + laser.y)


}

}

function laserLight2(){
  laser2 = createSprite(displayWidth-1000, displayHeight-500,50,5) 
  laser2.shapeColor = "green"
 laser2X=laser2.velocityX = 10

}