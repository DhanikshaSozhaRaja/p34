const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
function preload(){
  bacImg = loadImage("images/GamingBackground.png")
}
function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
    world = engine.world;
    Ground = new ground(490,395,210,20);
   //ground floor:
    block1 = new block(400,350,30,40);
    block2 = new block(430,350,30,40);
    block3 = new block(460,350,30,40);
    block4 = new block(490,350,30,40);
    block5 = new block(520,350,30,40);
    block6 = new block(550,350,30,40);
    block7 = new block(580,350,30,40);
    //first floor:
    block8 = new block(430,310,30,40);
    block9 = new block(460,310,30,40);
    block10 = new block(490,310,30,40);
    block11 = new block(520,310,30,40);
    block12 = new block(550,310,30,40);
    //third floor:
    block13 = new block(460,270,30,40);
    block14 = new block(490,270,30,40);
    block15 = new block(520,270,30,40);
    //top floor:
    block16 = new block(490,250,30,40);
    hero = new superHero(250,280);
    magicrope = new Magicrope(hero.body,{x:250, y:280});
    gaint = new monster(700,310);
    ground2 = new ground(700,360,5,2);
    
}

function draw() {
  background(bacImg);
  Engine.update(engine);
  strokeWeight(4);
Ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
hero.display();
magicrope.display();
gaint.display();
ground2.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
magicrope.fly();
// gameState = "launched";
}

