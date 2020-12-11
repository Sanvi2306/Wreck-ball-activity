
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,box1,box2,box3,box4,box5,box6,box7,box8,ball,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800,500);
	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,480,800,50);
	box1= new Box(670,450,70,70);
	box2= new Box(735,450,70,70);
	box3= new Box(735,400,70,70);
	box4= new Box(670,400,70,70);
    box5= new Box(735,340,70,70);
	box6= new Box(670,340,70,70);
    box7= new Box(735,280,70,70);
	box8= new Box(670,280,70,70);

	ball= new Ball(200,200,80);
	rope=new Rope(ball.body,{x:450,y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
 
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
ball.display();
rope.display();
}

function mouseDragged(){
Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

