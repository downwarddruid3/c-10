var ship1_image, ship2_image, sea_image
function preload(){
ship1_image=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
sea_image=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite (200, 200, 400, 400)
  sea.addImage("sea",sea_image)
  ship=createSprite (200, 250)
  ship.addAnimation("ship-1, ship-2, ship-3, ship-4", ship1_image)
  ship.scale=0.3
}

function draw() {
  background("blue");
  sea.velocityX=-7
  if (sea.x<0){
sea.x=sea.width/2
  }
 drawSprites();
}
