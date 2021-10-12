var player,playerImg;
var ground,groundImg;
var zombie,zombie1mg1,zombieImg2;
var zombieGroup;
var edges;
function preload(){
  playerImg = loadAnimation("images/p1.png", "images/p2.png","images/p3.png","images/p4.png",);
  groundImg=loadImage("images/background.jpg");
  zombieImg1 = loadImage("images/zombie1.png");
  zombieImg2 = loadImage("images/zombie2.png");
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400,200,800,400);
  ground.addImage(groundImg);
  ground.velocityX = -8;
  ground.scale = 1.5;

  player=createSprite(200, 280, 50, 50);
  player.addAnimation("running",playerImg);
  player.scale=0.5

  zombieGroup = new Group();
  edges = createEdgeSprites();
}

function draw() {
  background(0);  

  if(ground.x<300){
    ground.x = 400;
  }
  spawnZombies();
  drawSprites();
}


function spawnZombies() {
  if(frameCount%200===0){
    zombie =  createSprite(850,290,50,50);
    zombie.velocityX = -6;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 : zombie.addImage(zombieImg1);
      break;
      case 2 : zombie.addImage(zombieImg2);
      break;
      default:break;
    }
    zombie.scale = 0.8;
    zombie.lifetime = 800;
    zombieGroup.add(zombie);
  }
}