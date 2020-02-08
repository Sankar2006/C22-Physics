const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball, ball2;


function setup(){
    var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;
   var ground_options = {
       isStatic: true
   }
   ground = Bodies.rectangle(200,380,400,30, ground_options);
    World.add(world, ground);
    var ball_options = {
        restitution: 1
    }
    ball = Bodies.circle(200,200,30, ball_options);
    World.add(world,ball);

    var ball2_options = {
        restitution: 1
    }
    ball2 = Bodies.circle(100,100,20, ball2_options);
    World.add(world, ball2);
}

function draw(){
    background(rgb(51,153,255));
   Engine.update(engine);
   fill(rgb(0,204,0));
   rectMode(CENTER);
   rect(ground.position.x, ground.position.y, 400,30);
   fill("white");
   ellipseMode(RADIUS);
   ellipse(ball.position.x, ball.position.y,30);
   fill("blue");
   ellipseMode(RADIUS);
   ellipse(ball2.position.x, ball2.position.y, 20);
}