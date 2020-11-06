
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledball,ground;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800,200);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,180,800,10);

	crumpledball = new Ball(50,150,15);

	dustbin1 = new Dustbin(700,165,70,10);
	dustbin2 = new Dustbin(670,135,10,70);
	dustbin3 = new Dustbin(730,135,10,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  crumpledball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:37.5,y:-37.5});
	}
}