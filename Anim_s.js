class Anim_s{
  constructor(w){
    this.x = -20;
    this.w = w;
  }
  move(){
    this.x += 15;
  }
  show(){
    noStroke();
    fill(216, 88, 54);
    rect(this.x,0,this.w,height);
  }
}