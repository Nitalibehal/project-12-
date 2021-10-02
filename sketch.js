var garden,rabbit;
var gardenImg,rabbitImg,appleImg,LeafImg;
var leaf,apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  LeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  createApples();
  createLeaves();
  drawSprites();
}

function createApples (){
if(frameCount % 80 === 0) {
  apple = createSprite(100,50,10,3);
  apple.addImage(appleImg);
  apple.x = Math.round(random(330,220))
  apple.scale  = 0.1;
  apple.velocityY = 3
}
}

function createLeaves (){
  if(frameCount % 80 === 0) {
   leaf = createSprite(100,50,10,3);
   leaf.addImage(LeafImg);
   leaf.x = Math.round(random(340,240))
   leaf.scale = 0.1;
   leaf.velocityY = 4
  }
}