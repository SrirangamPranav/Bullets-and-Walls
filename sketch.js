var bullet,wall;
var speed,weight,thickness;
var damage;
var bulletRightEdge,wallLeftEdge;
var check=1;
function setup() {
  createCanvas(1600,400);
  thickness = Math.round(random(22,83));
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = "grey";
  
  bullet = createSprite(50,200,30,30);
  bullet.shapeColor = "white";

  
}

function draw() {
  background("black"); 
  
  console.log(speed);
  bullet.velocityX = speed;
  if(hasCollided(bullet,wall)){
    
    bullet.velocityX=0;
    
    if(damage<10){
        wall.shapeColor = color(0,255,0);
        stroke("green");
        strokeWeight("green");
        text(" Wall is strong ",600,200,textSize(50));
    }

    if(damage>10){
       wall.shapeColor = color(255,0,0);
       stroke("red");
       strokeWeight("red");
       text(" Wall is weak ",600,200,textSize(50));
    }
  }

  drawSprites();
}
function hasCollided(bullet,wall){
 bulletRightEdge = bullet.x + bullet.width/2;
  wallLeftEdge = wall.x-wall.width/2;
  if(bulletRightEdge>=wallLeftEdge){
	bullet.x = wall.x-wall.width/2-bullet.width/2;
    return true;
  }
  return false;
}