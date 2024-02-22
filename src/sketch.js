function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawCreature(0, 0);
}
function drawCreature(x, y){
  push();
      translate(x, y);
      translate(225, 270); 
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
