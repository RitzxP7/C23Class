const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world, ground, box1, box2, box3, ground1;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(250 ,300, 60, 60); 
  box1.color = "yellow";
  box2 = new Box(210, 200, 60, 60);
  box2.color = "blue";
  box3 = new Box(230, 100, 60, 30);
  box3.color = "green";

  ground1 = new Ground(400, 380, 800, 30);

}

function draw() {
  background(0);

Engine.update(engine);

box1.display();
box2.display();
box3.display();
ground1.display();
  
}

/*function mousePressed() {
   Matter.Body.setStatic(ball, false);
}

 function mouseDragged() {
   ball.position.y = mouseY;
  ball.position.x = mouseX;
}
*/