
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dbin;

function preload() {
  dustbin = loadImage("dustbingreen.png")
  paperImg = loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(300,350,30);
  ground = new Ground(400,600,800,20);
  dbin = new Dustbin(600,520,200,100);
  
  
  Engine.run(engine);
  
}


function draw() {
  background("lightgray");
  rectMode(CENTER);
  paper.display();
  ground.display();
  
  dbin.display();
  
  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-140});
  }
}



