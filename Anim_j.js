class Anim_j{
  constructor(r,g,b){
    this.noiseScale=0.0015;
    this.c1 = 0;
    this.c2 = height - (height-500)/2 - 300;
    this.alpha = 220;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  move(){
    this.c2 = this.c2 -= 13;  //由下往上升起
    this.c1 = this.c1 += 2;  //慢慢往右流動

    if(this.c2 <= height/5){
      this.c2 = height/5; //波浪高度維持
      this.c1 = this.c1 += 6; //往右跑讓波浪持續流動
    }
    if(this.c1 >= 500){
      //往右跑的時間
      this.alpha -= 7;
    }
    
    }

  show(){
    for (let x=0; x < 500; x++) {
      let noiseVal = noise((this.c1+x) * this.noiseScale, this.c2 * this.noiseScale);
      stroke(this.r, this.g, this.b, this.alpha);
      line(x + (width-500)/2, this.c2+noiseVal*500, x + (width-500)/2, height - (height-500)/2);
    }
  }
}






