var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)

    car = new CaretPosition(weight,speed);
    
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor = color(80,80,80);

        speed = random(55,90);
        weight = random(400,1500);
        thickness = random(22,83);

    car = createSprite(50,200,50,50);
    car.velocityX = speed;
    car.shapeColor(255);

    wall = createSprite(1200,200,thickness,height/2);
    wall.shapeColor = color(80,80,80);

    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);   

        if(hasCollided(bullet, wall))
        {
          bullet.sprite.velocityX = 0;
          var damage = 0.5 * bullet.weight * bullet.speed* bullet.speed/(wall.thickness *wall.thickness *wall.thickness);
         
          bullet.velocityX = 0;
         
          var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
      
        if(damage>10)
        {
          wall.sprite.shapeColor = color(255,0,0);
          wall.shapeColor = color(255,0,0);
      
        }
  
        if(damage<10)
        {
          wall.sprite.shapeColor = color(0,255,0);
          wall.shapeColor = color(0,255,0);
        }
        
        
        console.log(damage)
    }

}

function draw() {
  background(0);  
    car.sprite.collide(wall,calculateDeformation);
  
}
function calculateDeformation();
  var deformation = 0.5 *car.speed *car.speed/22509;

if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 *weight *speed *speed/22509;

if(deformation>180){
  car.sprite.shapeColor(255,0,0);
  car.shapeColor = color(230,230,0);
}
if(deformation<180 && deformation>100){
  car,sprite.shapeColor = color(230,230,0);
  car.shapeColor = color(230,230,0);
}
if(deformation<100){
  car.sprite.shapeColor = color(0,255,0);
  car.shapeColor = color(0,255,0);
}
drawSprites();
}