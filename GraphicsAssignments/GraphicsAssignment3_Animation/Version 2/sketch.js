//controlling multiple objects results in bad performance
//tomorrow: make one object with "linked" players
//one object will have multiple images to form the group
//should be less processing
//possbily look into making others follow one instead of copy one


//======================================================
// UPDATE count AND spriteList WHEN ADDING MORE SPRITES
//======================================================

let ground = 400;
let j = 0;
let num = 1;

//sprite, then sprite array; google how to use .json files later
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

//attributes
let speed = 0;
let facing = 'l';
let direction = 0;
let count = 5;

//array of objects (players)
let players = [];


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
}



function draw(){
    background(200);
    fill(140, 130, 120);
    rect(0, ground, width);
    p1 = new player(JG_Run);

    if((!keyIsPressed) || (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW))){
        direction = 0;
        p1.move(direction);
    }

    else if(keyIsDown(RIGHT_ARROW)){
        direction = 2;
        p1.move(direction);
    }

    else if(keyIsDown(LEFT_ARROW)){
        direction = 1
        p1.move(direction);
    }

    //number of copies
    for(num = 1; num <= count; num++){
        moveCopy(spriteList[num], direction);
        




    }
    j++;

    
}


function animateCopy(sprite){
    if(j == 9){
        j = 1;
    }

    image(sprite[j], p1.getX() + 80*num, ground- 72);
}

function moveCopy(sprite, n){
    
    if(n == 0){
        j = 0;
        if(facing == 'l'){
            push();
            translate(2*p1.getX() + 80*num, 0);
            scale(-1, 1);
            image(sprite[0], p1.getX() - 80, p1.getY());
            pop();
        }

        else{
            image(sprite[0], p1.getX() + 80*num, p1.getY());
        }

    }

    else if(n == 1){
        push();
        translate(2*p1.getX() + 240+ ((num-1)*160), 0);
        scale(-1, 1);
        animateCopy(sprite);
        pop();
    }

    else if(n == 2){
        animateCopy(sprite);
    }
}

class player{
    //sprite must be an array to animate
    constructor(sprite, facing){
        this.sprite = sprite;
        this.x = speed;
        this.y = ground-72;  
        this.s = 60;
        this.facing = facing;
    }
    
    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getFacing(){
        return this.facing;
    }


    animate(){
        if(i == 9){
            i = 1;
        }

        image(this.sprite[i], this.x, this.y);
        i++;   

    }

    move(d){
        //stand still (maintain direction)
        if(d == 0){
            i = 1;
            if(facing == 'l'){
                push();
                translate(2*speed + 80, 0);
                scale(-1, 1);
                image(this.sprite[0], speed, this.y);
                pop();
            }
            
            else{
                image(this.sprite[0], speed, this.y);
            }
            
        }
        //walk left
        else if(d == 1){
            push();
            translate(2*speed + 80, 0);
            scale(-1, 1);
            this.animate();
            pop();
            speed = speed - 6;
            facing = 'l';

        }
        //walk right
        else if(d == 2){
            this.animate();
            speed+=6;
            facing ='r';
        }
    }
}