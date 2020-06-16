const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

function setup() {
  createCanvas(1400,600);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(900,height,1800,50);

  body1 = new Box(1200,555,200,30);
	body2 = new Box(1100,530,20,80);
  body3 = new Box(1300,530,20,80);
  
  ball = new Ball(100,250,20);
  
}

function draw() {
  background(20);  
  Engine.update(engine);
  ground.display();
  body1.Display();
  body2.Display();
  body3.Display();
  ball.Display();

  keyPressed();
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:0.3,y:-1.6});
  }
}