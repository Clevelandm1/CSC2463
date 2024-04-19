let x = 0;
let y = 0;

let port;
let joyX = 0, joyY = 0, sw = 0;
let connectButton;
let circleX, circleY;
let speed = 3;
let cleared = false;

function setup() {
  canvas = createCanvas(800, 800);
  canvas.position(width/4, 50);

  port = createSerial();
  circleX = width / 2;
  circleY = height / 2;

  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
}

function draw() {
  let str = port.readUntil("\n");
  let values = str.split(",");
  if(cleared == false){
    if(values.length > 2){
      joyX = Number(values[0]);
      joyY = Number(values[1]);
      sw = Number(values[2]);
    }
  }

  circleX-=joyY;
  circleY+=joyX;
  cleared = false;

  if(frameCount % 600 == 0){
    port.clear();
    cleared = true;
  }


  let topPoint = createVector(width/2, 0);
  let bottomLeftPoint = createVector(0, height);
  let bottomRightPoint = createVector(width, height);

  let mX = circleX;
  let mY = circleY;

  // let mX = mouseX;
  // let mY = mouseY;

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

  //console.log(x, y);
  fill(mR, mG, mB);
  

  //if(sw == 1){
    // port.write(int(map(mR, 0, 255, 255, 0)));
    // port.write(int(map(mG, 0, 255, 255, 0)));
    // port.write(int(map(mB, 0, 255, 255, 0)));
    // port.write("\n");

    let message = `${int(mR)} ${int(mG)} ${int(mB)}\n`;
    if(keyIsDown(ENTER)){
      port.write(message);
    }

    strokeWeight(0);
    push();
    rectMode(CENTER);
    fill(map(mG, 0, 255, 255, 0), map(mB, 0, 255, 255, 0), map(mR, 0, 255, 255, 0));
    //circle(mX, mY, 110);
    pop();
    circle(mX, mY, 100);
    
  //}
  //else{
    strokeWeight(3);
  //}
  // circle(mX, mY, 100);
  //rotateY(frameCount*.01);
  triangle(topPoint.x/5, topPoint.y/5, bottomLeftPoint.x/5, bottomLeftPoint.y/5, bottomRightPoint.x/5, bottomRightPoint.y/5);
}

function connect() {
  if (!port.opened()) {
    port.open('Arduino', 115200);
  } else {
    port.close();
  }
}