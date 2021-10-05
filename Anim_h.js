class Anim_h{
  constructor(x, y, s){
    this.x = x;
    this.y = y;
    this.s = s;
    this.alpha = 255;
    this.n = random(-8, 8);
  }

  move(){
    this.y += this.n;
    this.alpha -= 8;
    }

  show(){
    noStroke();
    fill(250, 190, 11, this.alpha);
    circle(this.x, this.y, this.s);
  }
}