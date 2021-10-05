class Anim_l{
  constructor(startX, startY, speedX, speedY, size, rotate){
    this.x = startX;
    this.y = startY;
    this.speedX = speedX;
    this.speedY = speedY;
    this.s = size;
    this.angle = rotate;
    this.count = 0;
    this.alpha = 255;
    // this.color = color;
  }
  
  show(){
   push();
   translate(this.x, this.y);
   rotate(this.angle);
   // rotate(sin(frameCount/50));
   angleMode(DEGREES);
   scale(this.s);
   noStroke();
   fill(58, 173, 42, this.alpha);
   quad(0, -25, -70, 0, 0, 25, 70, 0);
   quad(0, 70, -25, 0, 0, -70, 25, 0);
   pop();
  }
    
  move(){
    this.count++;
    if(this.count >= 20){
      this.x = this.x;
      this.y = this.y;
      this.angle = this.angle;
      
    }else{
      this.angle += this.angle;
      this.x += this.speedX;
      this.y += this.speedY;
    }

    if(this.count >= 50){
      this.alpha = 0;
    }
  }
}