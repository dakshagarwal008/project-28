const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone,chain;
var tree;
function preload()
{

}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(600,400,20);
	mango2 = new Mango(640,400,20);
	mango3 = new Mango(680,400,20);
	mango4 = new Mango(720,400,20);
	mango5 = new Mango(620,350,20);
	mango6 = new Mango(660,350,20);
	mango7 = new Mango(700,350,20);
	mango8 = new Mango(660,300,20);

	ground = new Ground(650,700,1600,20);
	stone = new Stone(200,500,20);
	tree = new Tree(650,480,20,550);

 chain = new Throw(stone.body,{x:200,y:550});

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();	
  stone.display();	
  chain.display();

 
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseRealeased(){

  chain.fly();

}


function detectollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r,false);
	{
    Matter.Body.setStatic(lmango.body,false);
    detectollision(stone,mango1);
    detectollision(stone,mango2);
    detectollision(stone,mango3);
    detectollision(stone,mango4);
    detectollision(stone,mango5);
    detectollision(stone,mango6);
    detectollision(stone,mango7);
    detectollision(stone,mango8);
	}	
} 