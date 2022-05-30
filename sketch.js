var areia;
var donat;
var donag;
var vxl=0;
var vyl=0;
var grama=0.05;
var voo;
var r2,l2;
var piso;
var gasol=100;



function preload(){
  areia=loadImage("./img/bg_sur.png");
  donat=loadImage("./img/normal.png");
  voo=loadAnimation("./img/b_thrust_1.png","./img/b_thrust_2.png","./img/b_thrust_3.png");
  r2=loadAnimation("./img/right_thruster_1.png","./img/right_thruster_2.png");
  l2=loadAnimation("./img/left_thruster_1.png","./img/left_thruster_2.png");
  r2.looping=false;
  l2.looping=false;
  voo.playing=true;
  voo.looping=false;
}

function setup() {
  createCanvas(1000,600);
  donag=createSprite(100,50,30,30);
  donag.addImage(donat);
  donag.scale=0.10;
  donag.frameDelay=5;
  donag.addAnimation("voo",voo);
  donag.addAnimation("r2",r2);
  donag.addAnimation("l2",l2);
  piso=createSprite(500,590,1000,20);
}

function draw() {
  background("black");
  image(areia,0,0,1200,810);
  drawSprites(); 
  
  vyl=vyl+grama;
  donag.position.y+=vyl;
  donag.position.x+=vxl;

  textSize(25);
  fill("#87CEEB");
  text("vyl="+Math.round(vyl),850,30);
  text("vxl="+Math.round(vxl),850,60);
  text("gasol="+gasol,850,90);

  donag.collide(piso)
}
function keyPressed(){
  if(keyCode===UP_ARROW&&gasol>0){
    gasol=gasol-1;
    vyl=vyl-1;
    donag.changeAnimation("voo");
  }
  if(keyCode===RIGHT_ARROW&&gasol>0){
    gasol=gasol-1;
    vxl=vxl+0.5;
    donag.changeAnimation("l2");
  }
  if(keyCode===LEFT_ARROW&&gasol>0){
    gasol=gasol-1;
    vxl=vxl-0.5;
    donag.changeAnimation("r2");
  }
}