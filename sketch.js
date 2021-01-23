
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof, bobObject1,bobObject2, string;
var bobDiameter, offsetX, offsetY;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;





	//Create the Bodies Here.
  roof = new Roof(600,80,400,40);

  bobObject1 = new Bob(600,280,80);
  string1 = new String (bobObject1.body, roof.body, bobDiameter*2,0);
    //roof.body.offsetX=200;
    //roof.body.offsetY=200;
  bobObject2 = new Bob(523,280,80);
  string2 = new String (bobObject2.body,roof.body,bobDiameter*2,0);
  bobObject3 = new Bob(441,280,80);
  bobObject4 = new Bob(679,280,80);
  bobObject5 = new Bob(755,280,80);

  //string1 = new String(string.body,{x:600, y:80});
  var options = {
    bodyA:bobObject1.body,
    bodyB:roof.body,
    pointB:{x:bobObject1.offsetX, y:bobObject1.offsetY},
    stiffness: 0.04,
    length:5,
  }
  var string = Constraint.create(options);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(255);
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  string1.display();
  string2.display();

  
  

  drawSprites();
 
}



