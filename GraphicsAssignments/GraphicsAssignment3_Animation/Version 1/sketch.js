let SpelunkyGuy;
let SpelunkyGuy_Run = [];
let x = 0;
let lastkey; 
let action;
let ground = 400;
let startx = 0;
let speed = 6;
let active_Characters = [];
let travel = 0;
let active_Characters_Count = 1;

function preload(){
  SpelunkyGuy = loadImage('Sprites/SpelunkyGuy/SpelunkyGuy.png');
}

function setup() {
  createCanvas(900, 500);
  frameRate(24);

  //This Loop fills all arrays with the running frames
  for(i = 0; i < 9; i++){
    SpelunkyGuy_Run[i] = SpelunkyGuy.get(x, 0, 80, 80);
    x = x + 80;

  }
}

function draw() {
  background(200);
  let ground = height*4/5;
  let character_ground = ground-72;
  fill(140, 130, 120);
  rect(0, ground, width);

  active_Characters[travel] = new Character(SpelunkyGuy_Run, startx, character_ground);

  for(travel = 0; travel < 6; travel++){
    active_Characters[travel] = new Character(SpelunkyGuy_Run, startx + (travel*80), character_ground);

    switch(action){
      case 0: //stand still
        if(lastkey == 'l'){
          push();
          translate(active_Characters[travel].px*(2)+80, 0);
          scale(-1, 1);
          image(active_Characters[travel].sprite[0], active_Characters[travel].px, active_Characters[travel].py);
          pop();
        }
  
        else{
          image(active_Characters[travel].sprite[0], active_Characters[travel].px, active_Characters[travel].py);
        }
        break;
  
      case 1: //right
      active_Characters[travel].Run();
        move();
        break;
  
      case 2: //left
        push();
        translate(active_Characters[travel].px*(2)+80, 0);
        scale(-1, 1);
        active_Characters[travel].Run();
        move();
        pop();
        break;
  
      case 3:
        travel++;
        active_Characters[travel] = new Character(SpelunkyGuy_Run, startx+50, character_ground);
  
        break;
  
      default:
        image(active_Characters[travel].sprite[0], active_Characters[travel].px, active_Characters[travel].py);
    }
  
    //google a switch again to make the options run right, left, and
    //stand still
  
    //it worked
  
  
    if(keyIsDown(ENTER)){
      action = 3;
    }
  
    //stand still
    else if((!keyIsPressed) || (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW))){
      action = 0;
    }
  
    //right
    else if(keyIsDown(RIGHT_ARROW)){
      action = 1;
      lastkey = 'r';
    }
    
    //left
    else if(keyIsDown(LEFT_ARROW)){
      action = 2;
      lastkey = 'l';
    }
  }


  // switch(action){
  //   case 0: //stand still
  //     if(lastkey == 'l'){
  //       push();
  //       translate(active_Characters[travel].px*(2)+80, 0);
  //       scale(-1, 1);
  //       image(active_Characters[travel].sprite[0], active_Characters[travel].px, active_Characters[travel].py);
  //       pop();
  //     }

  //     else{
  //       image(active_Characters[travel].sprite[0], active_Characters[travel].px, active_Characters[travel].py);
  //     }
  //     break;

  //   case 1: //right
  //   active_Characters[travel].Run();
  //     move();
  //     break;

  //   case 2: //left
  //     push();
  //     translate(active_Characters[travel].px*(2)+80, 0);
  //     scale(-1, 1);
  //     active_Characters[travel].Run();
  //     move();
  //     pop();
  //     break;

  //   case 3:
  //     travel++;
  //     active_Characters[travel] = new Character(SpelunkyGuy_Run, startx+50, character_ground);

  //     break;

  //   default:
  //     image(active_Characters[travel].sprite[0], active_Characters[travel].px, active_Characters[travel].py);
  // }

  // //google a switch again to make the options run right, left, and
  // //stand still

  // //it worked


  // if(keyIsDown(ENTER)){
  //   action = 3;
  // }

  // //stand still
  // else if((!keyIsPressed) || (keyIsDown(RIGHT_ARROW) && keyIsDown(LEFT_ARROW))){
  //   action = 0;
  // }

  // //right
  // else if(keyIsDown(RIGHT_ARROW)){
  //   action = 1;
  //   lastkey = 'r';
  // }
  
  // //left
  // else if(keyIsDown(LEFT_ARROW)){
  //   action = 2;
  //   lastkey = 'l';
  // }


}



function move(){
  if(action == 2){
    startx = startx - speed;
  }

  else{
    startx = startx + speed;
  }
  
}






class Character{
  constructor(sprite, x, y){
    this.sprite = sprite;
    this.px = x;
    this.py = y;
    //image(sprite[0], this.px, this.py);
  }

  Run(){
    if(i == 9){
      i = 1;
    }
  
    image(this.sprite[i], this.px, this.py);
    i++;
  }






}










//if a condition is satisfied, call run function (button press)
// function Run(){
//   if(i == 9){
//     i = 1;
//   }

//   image(SpelunkyGuy_Run[i], 0, 328);
//   i++;
// }