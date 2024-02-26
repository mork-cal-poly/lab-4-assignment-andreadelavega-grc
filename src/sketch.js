
let bird1X = 180; 
let bird1Y = 200;
let bird1SC = 1;
let bird2Y = 360;
let clicked = false;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  drawBackground(0, 0);
  // ------ HIDDEN DOG --
  push() ;
    drawDog(180, 160, color(0, 0, 90, 200), color(50, 90, 140, 200));
  pop() ;


  // ------ BIRD 1 -------
  if (bird2Y < 280){
  drawCreature(bird1X, bird1Y, bird1SC);
    bird1X = bird1X - 1.5;
    bird1Y = bird1Y - 1.5; 
  if (bird1SC >= 0){
    bird1SC = bird1SC - 0.008;
  } 
    
  }else drawCreature(180, 200, 1);
  // ------ BIRD 2 -------
  if (clicked){
  drawCreature(260, bird2Y, 0.6);
  bird2Y = bird2Y - 1;
  } else drawCreature(260, 360, 0.6);

}
function mouseClicked(){
  if (210 < mouseX && mouseX < 330 && 260 < mouseY && mouseY < 390)
  clicked = true;
}
function drawCreature(x, y, sc){
  push();
      translate(x, y);
      scale(sc);
      
      //beak 
        noStroke();
        fill('#5F61CF');
        quad(-60, -110, -60, -100, -150, -125, -135, -130);
       //leg code
        stroke('white');
        strokeWeight(3);
        line(0, 5, 15, 30);
        line(10, 7, 27, 33);
      //body 
        noStroke();
        fill('#56cfe1');
        triangle(70, -50, 120, 50, -10, 0);
        fill('#4ea8de');
        triangle(70, -50, -10, 0, -85, -126);
        fill("#427DD5");
        ellipse(-60, -110, 60);
      //wing 
        fill('#64dfdf');
        quad (20, -73, -10, -90, 80, -185, 60, -90);
        quad (15, -50, -5, -70, 100, -170, 70, -65);
      //face 
        fill('white');
        ellipse (-70, -115, 10);
        stroke('white');
        strokeWeight(2);
        line (-80, -120, -60, -130);
   pop();
}
function drawBackground(x, y){ 
  push();
     translate(x, y);
     fill('#ABCF2C')
     rect(0, 0, 400, 400);
     noStroke();
     fill(255, 324, 0, 80); //yellow
       rect(0, 0, 330);
       rect(0, 0, 300);
     fill(236, 8, 134, 150); //magenta
       quad(0, 30, 170, 400, 100, 400, 25, 360);
     fill(245, 100, 32, 150); //orange
       quad(60, 0, 90, 0, 400, 400, 200, 400);
     fill('#ec0868')
       triangle(280, 20, 190, 110, 260, 70);
     push();
       translate(-80, 200);
       scale (1.5);
       triangle(320, 30, 220, 120, 300, 80);
     pop();
       rotate(45);
       triangle(320, 30, 220, 120, 300, 80);
  pop();
}

function drawDog(x, y, colorBrow, colorTummy) {
  push();

//translate by whatever args passed in
translate(x, y);
scale(0.2);
rotate(-PI/12);

fill(0, 0, 0);
noStroke()
//translate (x, y)

//body
fill(230, 230, 255);
noStroke();
rect(-20, -30, 50, 250);
rect(80, -30, 50, 250);
rect(30, -10, 50, 150);
fill(colorTummy);
ellipse(60, 10, 80, 150);


//ears
fill(255, 255, 248);
noStroke();
triangle(-60, -100, -40, -260, -10, -150);
triangle(80, -160, 110, -290, 130, -140);

//head
quad(-60, -100, -10, -150, 80, -160, 130, -140, 140, -20);
quad(-60, -100, -50, -50, 144, -50, 130, -140);
//chin
quad(160, -80, 170, 5, 20, 20, -50, -50, -140, -110);
triangle(160, -80, 130, -90, 130, -70);

//nose
fill(0, 0, 50, 256);
ellipse(100, -60, 90, 40);

//eyes
fill(0, 0, 0);
ellipse(20, -90, 20);
ellipse(100, -100, 20);

//eyebrows
fill(colorBrow);
ellipse(10, -120, 30, 20);
ellipse(100, -125, 30, 20);


//mouth
stroke(0, 0, 90, 255);
noFill();
strokeWeight(8);
arc(70, -35, 60, 40, 1/9, 3*PI/4);
arc(125, -40, 60, 40, PI/3, 5*PI/6);


//arms
push();
  fill(230, 230, 255);
  noStroke();
  rotate(-PI/4);
  ellipse(-75, 0, 150, 30);
  rotate(PI/4);
  ellipse(180, 30, 150, 28);
pop();

}
