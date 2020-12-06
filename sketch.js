var a;
var circles=[];

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies

var base1

var engine;

function setup() {
  createCanvas(800,800);
  stroke(255)
  
     engine = Engine.create()
     world = engine.world


  a=height;
  circles.push(width/2)

  base1 = new Ground(400,205,225,20)

}

function draw() {
  camera.zoom=camera.zoom+1
  background(0);  
  a=a-1;

  // for (i=0;i<circles.length;i++)
//{
//	circle(circles[i], height/2,20)
//}
//if(camera.position.x%width===0)
//{
//	circles.push(camera.position.x+width/2)
//}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

base1.display();

 drawSprites();


}






function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
