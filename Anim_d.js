class Anim_d{
  constructor(){
    this.x = width;
    this.w = width/4;
    this.alpha = 255;
  }
  move(){
    this.x -= 50;
  }
  show(){
    push();
    noStroke();
    fill(255,this.alpha);
    rect(this.x,height/2-150,this.w,45);
    rect(this.x+80,height/2-70,this.w,45);
    rect(this.x-50,height/2+10,this.w,45);
    rect(this.x+120,height/2+90,this.w,45);
    pop();
  }
}