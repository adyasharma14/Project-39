var PLAY=1;
var END=0;
var gameState=PLAY;
var END;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;
var overImage;
var background;

function preload()
{
  monkey_running =loadAnimation("images/sprite_0.png","images/sprite_1.png","images/sprite_2.png","images/sprite_3.png","images/sprite_4.png","images/sprite_5.png","images/sprite_6.png","images/sprite_7.png","images/sprite_8.png")
  bananaImage = loadImage("images/banana.png");
  obstacleImage = loadImage("images/obstacle.png");
  overImage=loadAnimation("images/sprite_7.png");
  backgrI=loadAnimation("images/jungle.jpg")
}



function setup() 
{
  createCanvas(displayWidth,displayHeight-110);
  
  background=createSprite(0,0,displayWidth,displayHeight);
  background.addAnimation("back",backgrI);
  background.x = background.width /2;
  background.scale=2.5
  
  monkey=createSprite(displayWidth/8,displayHeight-260,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.15
  monkey.setCollider("rectangle",0,0,50,monkey.height);
  
  ground=createSprite(displayWidth/8,displayHeight-260,900,3);
  ground.velocityX=-4;
  ground.visible=false;
  
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
  survivalTime=0;
}


function draw() 
{
  
 ground.x=ground.width/2 
  
if(gameState===PLAY)
 {
  
  spawnBanana();
  spawnObstacles();
  
  background.velocityX=-3;
    
   if(background.x<0){
      background.x=background.width/2
    }
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -13;
  }
  
  monkey.velocityY=monkey.velocityY+0.5
  
//switch(survivalTime){
 // case 2:monkey.scale=0.12;
   // break;
  //case 4:monkey.scale=0.14;
   // break;
  //case 6:monkey.scale=0.16
  //break;
 // case 8:monkey.scale=0.18;
  //  break;
   // default:break;

  
  
  
 

  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  survivalTime=survivalTime+2
  monkey.scale=monkey.scale+0.02}
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.1}
    

  
  monkey.collide(ground);
  camera.position.x = monkey.x;
  camera.position.y = monkey.y;

 drawSprites(); }
  
  stroke("black");
  textSize(30);
  fill("cyan")
  text("Score : "+survivalTime,displayWidth/2-60,displayHeight/2-30);
}
function spawnBanana(){
    if (frameCount % 320 === 0) {
    var banana = createSprite(displayWidth/2,displayHeight/4,40,10);
    banana.y =random(displayHeight/3,displayHeight/4-50);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=350;
    bananaGroup.add(banana);}
}
      
function spawnObstacles(){
 if (frameCount % 400 === 0){
   var obstacle = createSprite(displayWidth/2,displayHeight-270,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.13
   obstacle.lifetime=350;
   obstacle.velocityX = -3;
   obstaclesGroup.add(obstacle);
   }}
  
  




