function mobile(){
    deviceX = windowWidth;
    deviceY = windowHeight;

    blockY = deviceY / 5;
    blockX = deviceX / 2;

    // //畫線
    // //中間切一半
    // stroke(0);
    // strokeWeight(1);
    // line(blockX, 0, blockX, deviceY);
  
    // //橫的平分5等分
    // for(let b=1; b<5; b++){
    //   line(0, blockY*b, deviceX, blockY*b);
    // }
    cnv.touchStarted(mobileShow);
}

function mobileShow() {
    if (getAudioContext().state !== 'running') {
      getAudioContext().resume();
    }

    for (let i = 0; i < touches.length; i++) {
        if(touches[i].x > blockX){
            //a
            if(touches[i].y >= 0 && touches[i].y <= blockY){
                anim.push(new Anim_a(random(width), random(height), random(200,220), random(80,106), random(150,207)));
                sound[0].play();
                sound[0].setVolume(0.8);
            }
            //s
            if(touches[i].y >= blockY && touches[i].y <= blockY*2){
                anim.push(new Anim_s(random(20,50)));
                sound[1].play();
                sound[1].setVolume(0.5);
            }
            //d
            if(touches[i].y >= blockY*2 && touches[i].y <= blockY*3){
                anim.push(new Anim_d());
                sound[2].play();
                sound[2].setVolume(0.9);
            }
            //f
            if(touches[i].y >= blockY*3 && touches[i].y <= blockY*4){
                anim.push(new Anim_f(random(360)));
                sound[3].play();
                sound[3].setVolume(0.1);
            }
            //g
            if(touches[i].y >= blockY*4 && touches[i].y <= deviceY){
                anim.push(new Anim_g(random(360)));
                sound[4].play();
            }
        }else{
            //h
            if(touches[i].y >= 0 && touches[i].y <= blockY){
                for(let i=0; i<7; i++){
                  anim.push(new Anim_h(random(width), random(height), random(100, 200)));
                }
                sound[6].play();
                sound[6].setVolume(0.5);
            }
            //j
            if(touches[i].y >= blockY && touches[i].y <= blockY*2){
                anim.push(new Anim_j(random(50),random(50,120),random(170,188)));
                sound[7].play();
                sound[7].setVolume(0.4);
            }
            //k
            if(touches[i].y >= blockY*2 && touches[i].y <= blockY*3){
                K = random(0, 2);
                if(K <= 1){
                  anim.push(new Anim_k(0, random(height), width, random(height)));
                }else{
                  anim.push(new Anim_k(random(width), 0, random(width), height));
                }
                sound[5].play();
                sound[5].setVolume(1);
            }
            //l
            if(touches[i].y >= blockY*3 && touches[i].y <= blockY*4){
                for(let i=0; i<6; i++){
                  anim.push(new Anim_l(random(width), -30, random(-10,10), random(10,40), random(0.3, 1.5), random(10, 15)));
                }
                sound[8].play();
                sound[8].setVolume(0.2);
            }
            //space
            if(touches[i].y >= blockY*4 && touches[i].y <= deviceY){
                bgcolor = random(colors);
            }
        }
    }
}



function touchMoved() {
    return false;
}
