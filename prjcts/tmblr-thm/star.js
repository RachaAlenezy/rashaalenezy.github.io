function Star(){
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.b = 0;
  this.g = 0;
  this.s = 0;

  this.update = function() {
    pos = random(-200, 200);
    posX = random(-pos, pos);
    posY = random(-pos, pos);
    this.x = mouseX + posX;
    this.y = mouseY + posY;
    this.r = random(170, 200);
    this.g = random(120, 170);
    this.b = random(120, 170);
  };

  this.show = function() {
    weight = random(0, 5);
    stroke(this.r, this.g, this.b);
    strokeWeight(weight);
    point(this.x,this.y);

    /*for (i = 50 ; i < 50 ; i++){
      stroke(this.r+i, this.g+i, this.b+i);
      strokeWeight(weight++);
      point(this.x,this.y);
    }*/

  };
}
