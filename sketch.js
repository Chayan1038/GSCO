var car,wall;
var speed,weight;
function setup() {
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  var canvas = createCanvas(1600,400);
  canvas.shapeColor=color("green");
  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  wall=createSprite(1500,200,60,height/2);
  car.shapeColor=color("blue");
  wall.shapeColor=color(80,80,80);
  if(car.x - wall.x < car.width/2 + wall.width /2)
  {
    car.velocityX= speed;
    var deformation=0.5 * weight * speed * speed/22500;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}