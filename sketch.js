
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground, groundImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  groundImage = loadImage("ground.png");
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(50, 180, 20, 20);
  monkey.addAnimation("monkey running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(200, 260, 20, 5);
  ground.addImage("ground", groundImage);
  ground.x = ground.width/2;
  
  score = 0;
}


function draw() {
  background(255);
  
  text("Survival time: "+ score, 200, 20);
  monkey.collide(ground);

  monkey.depth = FoodGroup.depth;
  monkey.depth = obstacleGroup.depth;

  
    
    score = Math.ceil(frameCount/frameRate());

    if(ground.x < 0){
      ground.x = ground.width/2;
    }

    monkey.velocityY = monkey.velocityY + 0.8;
    if(keyWentDown("space") && monkey.y  >= 110){
      monkey.velocityY = -12;
    }

    Obstacles(); 
    food();

    if(monkey.isTouching(FoodGroup)){
       FoodGroup.destroyEach();
       }  
  drawSprites();
}
function Obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400, 240, 20, 20);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}
function food(){
  if(frameCount % 90 === 0){
    banana = createSprite(400, 240, 20, 20);
    banana.y = Math.round(random(180, 230));
    banana.addImage("banana", bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -2;
    banana.lifetime = 200;
    FoodGroup.add(banana);
  }
}






