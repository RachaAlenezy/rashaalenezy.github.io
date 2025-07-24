
var stars = [];
var canvas;

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style.left='0';
  canvas.style.top='0';
  //canvas.style.width='100%';
  //canvas.style.height='100%';
  //noLoop();
  for (i=0; i<50 ; i++){
    stars[i] = new Star();
  }
  //background(20);
  frameRate(30);
  background(20);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  //blendMode(DODGE);
  //if(frameCount % 4 == 0)
  // background(20,20,20,51);
  background(20,20,20,51);
  if (mouseX != pmouseX && mouseY != pmouseY){

  for (var i=0 ; i<50 ; i++){
    stars[i].update();
    stars[i].show();
  }
}
else {
  background(20,20,20,85);
  for (var i=0 ; i<50 ; i+=5){
    stars[i].update();
    stars[i].show();
  }
}
//background(0);
    /*for (i = 0; i < 10; i++) {
      blendMode(DODGE);
      rnd = random(-100, 100);
      r = random(100, 200);
      g = random(120, 170);
      b = random(120, 170);
      stroke(r, g, b);
      rndd = random(0, 5);
      strokeWeight(rndd);
      rndX = random(-rnd, rnd);
      rndY = random(-rnd, rnd);
      point(mouseX + rndX, mouseY + rndY);
      strokeWeight(2);
      rand = random(0, 30);
      noFill();
    }*/
}
