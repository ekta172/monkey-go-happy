var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
monkey_running =   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png" ,"sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}

function draw() {
 background("lightblue");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,430,50);
  
  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival Time: "+ survivalTime,100,50);
  
  if (ground.x < 100){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;}
  
   monkey.velocityY = monkey.velocityY + 0.8
  if(monkey.isTouching(foodGroup)){
    score = score+1;
    foodGroup.destroyEach();
    
  }
  
  spawnFood();
  oBstacles();
  
  monkey.collide(ground);
  drawSprites();
}

function spawnFood(){
  if(frameCount % 90 === 0){
    var food = createSprite(200,Math.round(random(120,200)),20,20);
    food.addImage("banana",bananaImage);
    food.scale = 0.1;
    food.velocityX = -4
    food.lifetime = 150;
    foodGroup.add(food);
  }
}

function oBstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(Math.round(random(200,320)),327,50,50);
    obstacle.addImage("stone",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}




