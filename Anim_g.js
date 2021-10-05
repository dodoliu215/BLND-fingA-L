class Anim_g{
  constructor(a){
    this.a = a
    this.total = 0;
    this.x = 0;
  }
  move(){
    this.x += 5;
    this.total +=15;
    if(this.total >= 360) {
      this.total = 360;
    }
  }
  show(){
    for(let i=0; i<this.total; i+=12){
      push(); 
      translate(width/2,height/2);
      rotate(this.a+i);
      noStroke();
      fill(0,this.alpha);
      circle(this.x,this.x,10);
      pop();
    }
  }
}