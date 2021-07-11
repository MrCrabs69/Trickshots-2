const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;

var boyImg, backgroundImg
var box1, box2
function preload() {
  boyImg = loadImage("boy.png")
  backgroundImg = loadImage("background.jpg")
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  engine = Engine.create();
  world = engine.world
  
  ground = new Ground(displayWidth/2, displayHeight-50, displayWidth, 20)
ball = new Ball(100,200,20)
sling = new Sling(ball.body,{x:330, y:750})
 // box1 - new Box(1500,500,80,80)
 // box2 = new Box(1500, 500, 80, 80)

}

function draw() {
  background(backgroundImg); 
  fill("black")
text(mouseX+ ","+ mouseY, mouseX, mouseY)
 Engine.update(engine)
image(boyImg, 200, displayHeight -400, 150, 350)

  ball.display();
  sling.display();
  //box1.display();
 // box2.display();
}