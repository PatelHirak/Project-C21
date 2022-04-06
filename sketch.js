var ball;
var ground;
var left;
var right;
var top_wall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	//fill("white")
	ground =new Ground(width/2,670,width,20);
    right = new Ground(1350,600,20,120);
    left = new Ground(1100,600,20,120);
    //top_wall = new Ground(200,10,400,20);

	var ball_options={

		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(260,100,20,ball_options);
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display()
  left.display()
  right.display()
  //top_wall.display()
  fill("white")
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
 
}

function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

