let ball;
let floor;
let balls = [];

function setup() {
	new Canvas(500, 500);

	floor = new Sprite(width/2, height-20, width, 10, 's');
	world.gravity.y = 20;
}

function draw() {
	background('gray');

	let r = map(sin(frameCount), -1, 1, 0, 255);
	let g = map(sin(frameCount*2), -1, 1, 255, 0);
	let bl = map(sin(frameCount), -1, 1, 255, 0);

	c = color(r, g, bl);

	let b = new Sprite(mouseX, mouseY, 10, 'd');
	b.color = c;
	balls.push(b);
	
	for(let i = 0; i < balls.length; i++){
		if((balls[i].x < -5) || (balls[i].x > width+5) || (balls[i].y > height)){
			balls.splice(i, 1);
		}
	}

	console.log(balls.length);
}
