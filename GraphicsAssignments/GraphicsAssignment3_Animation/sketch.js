let SG;
let G;
let R;
let GL;
let JG;
let RB;
let SG_Run = [];
let G_Run = [];
let R_Run = [];
let GL_Run = [];
let JG_Run = [];
let RB_Run = [];
let spriteList = [JG_Run, G_Run, R_Run, GL_Run, SG_Run, RB_Run];

//Array for all Characters
let players = [];

//Ground
let ground = 328;

function preload(){
    SG = loadImage('Sprites/SpelunkyGuy/SpelunkyGuy.png');
    G = loadImage('Sprites/Green/Green.png');
    R = loadImage('Sprites/Red/Red.png');
    GL = loadImage('Sprites/Gold/Gold.png');
    JG = loadImage('Sprites/Jungle/Jungle.png');
    RB = loadImage('Sprites/Robot/Robot.png');
  }

  function setup(){
    createCanvas(900, 500);
    frameRate(24);

    let x = 0;
    for(i = 0; i < 9; i++){
        SG_Run[i] = SG.get(x, 0, 80, 80);
        G_Run[i] = G.get(x, 0, 80, 80);
        R_Run[i] = R.get(x, 0, 80, 80);
        GL_Run[i] = GL.get(x, 0, 80, 80);
        JG_Run[i] = JG.get(x, 0, 80, 80);
        RB_Run[i] = RB.get(x, 0, 80, 80);
        x = x + 80;
    }

    for(j = 0; j < 6; j++){
        players[j] = new Character(random(50, 850), ground, spriteList[j], random(4, 8));
    }
}

function draw(){
    background(200);
    fill(140, 130, 120);
    rect(0, height*4/5, width);

    if(!keyIsPressed || (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW))){
        for(p = 0; p < 6; p++){
            players[p].showStand();
        }
    }

    else if(keyIsDown(RIGHT_ARROW)){
        for(p = 0; p < 6; p++){
            players[p].showRight();
            players[p].moveRight();
        }
    }

    else if(keyIsDown(LEFT_ARROW)){
        for(p = 0; p < 6; p++){
            players[p].showLeft();
            players[p].moveLeft();
        }
    }
}

class Character{
    constructor(x, y, sprite, speed){
        this.x = x;
        this.y = y;
        this.sprite = sprite;
        this.direction = 'R';
        this.speed = speed;
        this.i = 1;
    }

    showStand(){
        //Face Right
        if(this.direction == 'R'){
            image(this.sprite[0], this.x, this.y);
        }

        //Face Left
        else{
            push();
            translate(this.x + 80, 0);
            scale(-1, 1);
            image(this.sprite[0], 0, this.y);
            pop();
        }
    }

    showRight(){
        if(this.i == 9){
            this.i = 1;
        }

        image(this.sprite[this.i], this.x, this.y);
        this.i++;
    }

    showLeft(){
        if(this.i == 9){
            this.i = 1;
        }

        push();
        translate(this.x + 80, 0);
        scale(-1, 1);
        image(this.sprite[this.i], 0, this.y);
        pop();
        this.i++;

    }

    moveRight(){
        this.x = this.x + this.speed;
        this.direction = 'R';
        if(this.x > (width - 60)){
            this.x = this.x - this.speed;
            this.i = 0;
        }
    }

    moveLeft(){
        this.x = this.x - this.speed;
        this.direction = 'L';
        if(this.x < (width-920)){
            this.x = this.x + this.speed;
            this.i = 0;
        }
    }
}