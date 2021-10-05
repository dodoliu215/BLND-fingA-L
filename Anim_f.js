class Anim_f{
  constructor(a){
    this.s = 0;
    this.a = a;
  }
  move(){
    this.s += 20;
  }
  show(){
    push(); 
    translate(width/2,height/2);
    rotate(this.a);
    noFill();
    stroke(0);
    strokeWeight(1.5);
    rectMode(CENTER);
    rect(0,0,this.s,this.s);
    pop();
  }
}