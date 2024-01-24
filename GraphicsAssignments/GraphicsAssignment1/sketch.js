function setup() {
  createCanvas(800, 2400);
}

function draw() {
  background('rgb(0, 255, 0)');

  //Example 1
  strokeWeight(3);              //change border thickness be thicker
  stroke(0);
  fill('white');                //begin white shapes
  smooth();
  circle(200, 200, 325);
  noSmooth();
  square(425 ,40, 325);

  //Example 2
  strokeWeight(0);              //change border thickness to no border
  square(0, 400, 800);
  noFill();                     //end white shapes
  
  smooth();                     //begin smooth shapes
  fill('rgba(255, 0, 0, .4)');
  circle(width/2, 700, 400);
  noFill();

  fill('rgba(0, 255, 0, .4)');
  circle((width/3)*2, 900, 400);
  noFill();

  fill('rgba(0, 0, 255, .4)');
  circle((width/3), 900, 400);
  noFill();         
  noSmooth();                   //end smooth shapes

  //Example 3
  fill('black');
  rect(0, 1200, 800, 400);
  noFill();                     //i just realized i dont need all of these noFill()'s...

  fill('yellow');
  circle(200, 1400, 325);
  noFill();

  fill('black');
  triangle(200, 1400, 0, 1200, 0, 1600);  //mouth part
  noFill();

  smooth();
  fill(255, 40, 0);
  square(425 ,1240, 325, 325/2, 325/2, 0, 0);
  noFill();

  fill('white');                          //left eye
  circle(425+(325/4), 1410, 100);
  noFill();

  fill('blue');
  circle(425+(325/4), 1410, 60);
  noFill();

  fill('white');                          //right eye
  circle(425+((325/4)*3), 1410, 100);
  noFill();

  fill('blue');
  circle(425+((325/4)*3), 1410, 60);
  noFill();
  noSmooth();

  //Example 4
  fill(0, 0, 100);
  square(0, 1600, 800);
  
  fill(0, 130, 0);
  strokeWeight(9);
  stroke(255);
  smooth();
  circle(400, 2000, 400);
  noSmooth();

  //Star in Example 4
  angleMode(RADIANS);

  //radius of 210
  //x = r*cos()
  //y = r*sin()
  let r = 200;
  let sr = r*(2/5);
  let w = 400;
  let h = 2000;

  fill(255, 0, 0);
  beginShape();
  vertex(w-(r*cos(5*PI/10)), h-(r*sin(5*PI/10)));
  vertex(w-(sr*cos(7*PI/10)), h-(sr*sin(7*PI/10)));

  vertex(w-(r*cos(9*PI/10)), h-(r*sin(9*PI/10)));
  vertex(w-(sr*cos(11*PI/10)), h-(sr*sin(11*PI/10)));

  vertex(w-(r*cos(13*PI/10)), h-(r*sin(13*PI/10)));
  vertex(w-(sr*cos(15*PI/10)), h-(sr*sin(15*PI/10)));

  vertex(w-(r*cos(17*PI/10)), h-(r*sin(17*PI/10)));
  vertex(w-(sr*cos(19*PI/10)), h-(sr*sin(19*PI/10)));

  vertex(w-(r*cos(1*PI/10)), h-(r*sin(1*PI/10)));
  vertex(w-(sr*cos(3*PI/10)), h-(sr*sin(3*PI/10)));
  endShape(CLOSE);

  
}
