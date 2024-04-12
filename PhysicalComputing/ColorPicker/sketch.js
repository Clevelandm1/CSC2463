let x = 0;
let y = 0;


function setup() {
  createCanvas(800, 800);
}

function draw() {

  let topPoint = createVector(width/2, 0);
  let bottomLeftPoint = createVector(0, height);
  let bottomRightPoint = createVector(width, height);

  let mX = mouseX;
  let mY = mouseY;

  // let mX = random(0, width);
  // let mY = random(0, height);
  
  // let mX = width/2+cos(x)*x*10;
  // let mY = height/2+sin(y)*y*5;


  x+=.05;
  y+=.05;
  
 

  mR = map(dist(width/2, 0, mX, mY), height, 0, 0, 255);
  mG = map(dist(0, height, mX, mY ), 1.1*height, 0, 0, 255);
  mB = map(dist(height, width, mX, mY), 1.1*height, 0, 0, 255);




  // let mX = cos(x)*x*10;
  // let mY = sin(y)*y*5;


  // x+=.05;
  // y+=.05;
  
 

  // mR = map(dist(0, -height/2, mX, mY), height/2, 0, 0, 255);
  // mG = map(dist(-width/2, -height/2, mX, mY ), 1.1*height/2, 0, 0, 255);
  // mB = map(dist(height/2, width/2, mX, mY), 1.1*height/2, 0, 0, 255);

  console.log(x, y);
  fill(mR, mG, mB);
  

  if(mouseIsPressed){
    strokeWeight(0);
    push();
    rectMode(CENTER);
    fill(map(mG, 0, 255, 255, 0), map(mB, 0, 255, 255, 0), map(mR, 0, 255, 255, 0));
    circle(mX, mY, 110);
    pop();
    circle(mX, mY, 100);
    
  }
  else{
    strokeWeight(10);
  }
  // circle(mX, mY, 100);
  //rotateY(frameCount*.01);
  triangle(topPoint.x/5, topPoint.y/5, bottomLeftPoint.x/5, bottomLeftPoint.y/5, bottomRightPoint.x/5, bottomRightPoint.y/5);
}
