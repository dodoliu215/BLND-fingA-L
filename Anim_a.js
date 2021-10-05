class Anim_a{
  constructor(x, y, r, g, b){
    this.x = x;
    this.y = y;
    this.d = 10;
    this.alpha = 200;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  move(){
    this.d += 10;
    this.alpha -= 3;
  }
  show(){
    push();
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.d);
    pop();
  }
}