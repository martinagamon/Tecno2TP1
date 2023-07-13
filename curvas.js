class Curva {
  constructor() {
    this.frequency = 0;
    this.x = width / 2;
    this.y = height / 2;
    this.intensity = 0;
    this.radius = min(width, height) / 2;
    this.figureScale = this.radius / 95;
    this.figureX = this.x - this.radius;
    this.figureY = this.y - this.radius;



    //Curva 3
    //this.curva3 = color(115, 152, 160);
    this.curva3C1 = color(142, 190, 200);
    this.curva3C2 = color(187,214,220);

    //Curva 4
    //this.forma7 = color(254, 141, 33);
    this.curva4C1 = color(255,125,0);
    this.curva4C2 = color(255, 197, 149);

    //Curva 5
     //this.curva5 = color(236,253,255);
    this.curva5C1 = color(217,251,255);
    this.curva5C2 = color(238,239,239);

    //Curva 7
    //this.curva7 = color(255, 170, 90);//ori
    this.curva7C1 = color(255, 125, 0);//sat
    this.curva7C2 = color(255, 197, 149);//desat

    //Curva 8
    //this.forma7 = color(254, 141, 33);
    this.curva8C1 = color(217,251,255);//sat
    this.curva8C2 = color(238,239,239);//desat

    //Curva 9'
    //this.curva9 = color(157,190,199);//ori
    this.curva9C1 = color(168, 216, 229);//sat
    this.curva9C2 = color(209, 223, 227);//desat

    //Curva 10
    this.curva10C1 = color(217,251,255);//sat
    this.curva10C2 = color(238,239,239);//desat

    //Curva 11
    this.curva11C1 = color(217,251,255);//sat
    this.curva11C2 = color(238,239,239);//desat

    //gradientes
    this.colorInterpolation = 0;
    this.colorStep = 0.01;
    this.saturation= 50;
    this.colorInterpolation1 = 1;
    this.luminosidad= 40;
   //sombras
    this.shadowOffsetX = 5;
    this.shadowOffsetY = 12;
    this.shadowBlur = 10;
    this.shadowColor = 'rgba(0, 0, 0, 0.5)';
    
    this.shadowOffsetXC = 14;
    this.shadowOffsetYC = 28;
    this.shadowBlurC = 15;

  }

  updateColorInterpolation() {
    if (label === "agudo") {
      this.saturation= 100+this.colorInterpolation;
      this.luminosidad= 80;
      this.colorInterpolation = lerp(this.colorInterpolation, 0, 0.02); // Cambio gradual hacia 0
      variador++;
    } else if (label === "grave") {
      this.saturation= 60+this.colorInterpolation1;
      this.luminosidad= 45;
      this.colorInterpolation = lerp(this.colorInterpolation, 1, 0.02); // Cambio gradual hacia 1
      variadorGrave++;
    } else if (label === "Ruido de fondo"){
      this.saturation= 95;
      this.luminosidad= 40;
    } 

  }



  draw() {
    background(220);
    //currentSaturation = lerp(currentSaturation, targetSaturation, saturationSpeed);
    //let lerpedColor = lerpColor(this.colorElipse1, this.colorElipse2, this.saturation);
   // fill('LightCyan');
    push();
    let gradientE = drawingContext.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradientE.addColorStop(1, `hsl(180, ${this.saturation}%, 94%)`);
    gradientE.addColorStop(0.5, `hsl(177, ${this.saturation}%, 87%)`);
    gradientE.addColorStop(0, `hsl(151, ${this.saturation}%, 83%)`);
  
   // Aplicar gradiente al relleno
    drawingContext.fillStyle = gradientE;
    drawingContext.shadowOffsetX = this.shadowOffsetXC;
    drawingContext.shadowOffsetY = this.shadowOffsetYC;
    drawingContext.shadowBlur = this.shadowBlurC;
    drawingContext.shadowColor = this.shadowColor;
    
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2); 
   pop();
    //let gradientE = drawingContext.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);

   // variador++;
   //CUrva 1
   // Crea el gradiente lineal
    let gradient = drawingContext.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0.1, `hsl(180, ${this.saturation}%, 94%)`);
    gradient.addColorStop(0.3, `hsl(186, ${this.saturation}%, 87%)`);
    gradient.addColorStop(0.7, `hsl(210, 14%, ${this.luminosidad}%)`);
    gradient.addColorStop(1, `hsl(210, 13%, ${this.luminosidad}%)`); 

    noStroke();
    push();
    translate(this.figureX, this.figureY + this.radius / 50);
    scale(this.figureScale);
    beginShape();
    vertex(102, 9);
    bezierVertex(108, 9, 115, 10, 123, 12);
    bezierVertex(132, 15, 140, 19, 145, 22);
    bezierVertex(147, 34, 147, 51, 144, 72);
    bezierVertex(141, 87, 137, 100, 134, 105);
    bezierVertex(38, 162, 31, 163, 28, 161);
    bezierVertex(66, 101, 87, 74, 92, 53);
    bezierVertex(92, 52, 53, 151, 102, 9);
    endShape();
    pop();
  
    // Aplica el gradiente como relleno a la figura curva
    drawingContext.fillStyle = gradient;
    drawingContext.fill();
    //CUrva 2

    let gradient2 = drawingContext.createLinearGradient(0, 0, 0, height);
    gradient2.addColorStop(0.3, 'LightCyan');  // Color inicial del gradiente
    gradient2.addColorStop(0.8, `hsl(39, ${this.saturation}%, 68%)`);  // Color final del gradiente
    gradient2.addColorStop(1, `hsl(39, ${this.saturation}%, 50%)`);  // Color final del gradiente

    
    // Dibuja la figura curva
    push();
    translate(this.figureX, this.figureY);
    scale(this.figureScale);
    beginShape();
    vertex(169, 122);
    bezierVertex(193, 125, 178, 142, 172, 151);
    bezierVertex(169, 159, 157, 167, 153, 170);
    bezierVertex(166, 159, 157, 167, 153, 170);
    bezierVertex(133, 189, 97+sin(variador*0.05)*4, 189, 92, 188);
    bezierVertex(98, 181, 111+sin(variador*0.05)*4, 163, 131+sin(variador*0.05)*4, 151);
    bezierVertex(148+sin(variador*0.05)*4, 140+sin(variador*0.05)*4, 160, 133, 169, 122);
    endShape();
    pop();
    
    drawingContext.fillStyle = gradient2;
    drawingContext.fill();

    //CUrva 3
    let lerpedColor3 = lerpColor(this.curva3C1, this.curva3C2, this.colorInterpolation);
    push();
    translate(this.figureX - this.radius / 19, this.figureY - this.radius / 30);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor3);
    vertex(56, 21);
    bezierVertex(56, 15, 82, 7, 106, 9);
    bezierVertex(113, 9, 128, 10, 144, 19);
    bezierVertex(180, 39, 187, 79, 188, 84);
    bezierVertex(190, 97+sin(variadorGrave*0.05)*4, 191, 97, 184, 121);
    bezierVertex(174+sin(variadorGrave*0.05)*6, 124+sin(variadorGrave*0.05)*4, 167, 69+sin(variadorGrave*0.05)*4, 123, 42);
    bezierVertex(90, 22, 56+sin(variadorGrave*0.05)*4, 28+sin(variadorGrave*0.05)*4, 56, 21);
    endShape();
    pop();

    //CUrva 4
    let lerpedColor4 = lerpColor(this.curva4C1, this.curva4C2, this.colorInterpolation);
    push();
    translate(this.figureX, this.figureY + this.radius / 50 - 25);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor4);
    drawingContext.shadowOffsetX = this.shadowOffsetX;
    drawingContext.shadowOffsetY = this.shadowOffsetY;
    drawingContext.shadowBlur = this.shadowBlur;
    drawingContext.shadowColor = this.shadowColor;
    vertex(98, 19);
    bezierVertex(99, 17, 105, 19, 115, 24);
    bezierVertex(122, 27, 134, 34, 147, 48);
    bezierVertex(159, 62, 167, 77, 166, 78);
    bezierVertex(165, 79+sin(variador*0.05)*4, 160+sin(variador*0.05)*-6, 64, 98, 19);
    endShape();
    pop();
    
   
    //CUrva 5
    let lerpedColor5 = lerpColor(this.curva5C1, this.curva5C2, this.colorInterpolation);
    push();
    translate(this.figureX / 1.1, this.figureY - 53);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor5);
    drawingContext.shadowOffsetX = this.shadowOffsetX;
    drawingContext.shadowOffsetY = this.shadowOffsetY;
    drawingContext.shadowBlur = this.shadowBlur;
    drawingContext.shadowColor = this.shadowColor;
    vertex(131, 81);
    bezierVertex(132, 82, 128, 93+sin(variadorGrave*0.05)*4, 121, 103+sin(variadorGrave*0.05)*5);
    bezierVertex(114, 115+sin(variadorGrave*0.05)*4, 106+sin(variadorGrave*0.05)*4, 123, 101+sin(variadorGrave*0.05)*4, 126);
    bezierVertex(93+sin(variadorGrave*0.05)*4, 132, 84, 137, 84+sin(variadorGrave*0.05)*4, 136);
    bezierVertex(83, 135, 101, 125, 117, 104);
    //bezierVertex(126, 92, 130, 181, 131, 81);
    endShape();
    pop();



    //CUrva 6
    let gradient6 = drawingContext.createLinearGradient(0, 0, 0, height);
    gradient6.addColorStop(0, 'LightCyan');  // Color inicial del gradiente  
    gradient6.addColorStop(0.7, `hsl(43, ${this.saturation}%, 64%)`);  // Color final del gradiente
    gradient6.addColorStop(1, `hsl(43, ${this.saturation}%, 50%)`);  // Color final del gradiente

    push();
    translate(this.figureX, this.figureY);
    scale(this.figureScale);
    beginShape();
   
    vertex(43, 28);
    bezierVertex(56, 29+sin(variador*0.05)*1, 84, 68, 65+sin(variador*0.05)*5, 70);
    bezierVertex(23, 74, 31, 140, 15, 135+sin(variador*0.05)*5);
    bezierVertex(2, 130, 2, 98+sin(variador*0.05)*5, 5+sin(variador*0.05)*1, 75);
    bezierVertex(10, 53+sin(variador*0.05)*5, 27, 25+sin(variador*0.05)*5, 43, 28);
    endShape();
    pop();

    drawingContext.fillStyle = gradient6;
    drawingContext.fill();


    //CUrva 7

    let lerpedColor7 = lerpColor(this.curva7C1, this.curva7C2, this.colorInterpolation);


    push();
    translate(this.figureX * 9.5, this.figureY);
    scale(this.figureScale);
    rotate(radians(98));
    beginShape();
    fill(lerpedColor7);
    vertex(98, 19);
    bezierVertex(99+sin(variador*0.05)*5, 17, 105+sin(variador*0.05)*5, 19, 115+sin(variador*0.05)*5, 24);
    bezierVertex(122+sin(variador*0.05)*5, 27, 134+sin(variador*0.05)*5, 34, 147+sin(variador*0.05)*5, 48);
    bezierVertex(159, 62+sin(variador*0.05)*-5, 167, 77, 166, 78);
    bezierVertex(165, 79, 160+sin(variador*0.05)*5, 64, 98, 19);
    endShape();
    pop();


    //CUrva 8
    //variador++;
    let lerpedColor8 = lerpColor(this.curva8C1, this.curva8C2, this.colorInterpolation);
    push();
    translate(this.figureX, this.figureY);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor8);
    drawingContext.shadowOffsetX = this.shadowOffsetX;
    drawingContext.shadowOffsetY = this.shadowOffsetY;
    drawingContext.shadowBlur = this.shadowBlur;
    drawingContext.shadowColor = this.shadowColor;
    vertex(122, 51);
    bezierVertex(122, 52, 102, 40, 78, 46);
    bezierVertex(62, 50, 50, 61, 42, 69);
    bezierVertex(25, 85, 19, 100, 19, 100);
    bezierVertex(19, 99, 34, 49+sin(variadorGrave*0.05)*5, 70, 40);
    bezierVertex(96, 32, 122, 50, 122, 51);
    endShape();
    pop();

    //CUrva 9
   // variador++;
    let lerpedColor9 = lerpColor(this.curva9C1, this.curva9C2, this.colorInterpolation);
    push();
    translate(this.figureX, this.figureY);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor9);//lerpedColor9
    vertex(61, 109);
    bezierVertex(61+sin(variadorGrave*0.05)*4, 117, 83+sin(variadorGrave*0.05)*4, 147, 76+sin(variadorGrave*0.05)*4, 167);
    bezierVertex(71+sin(variadorGrave*0.05)*4, 181, 80, 187+sin(variadorGrave*0.05)*4, 78, 187);
    bezierVertex(63+sin(variadorGrave*0.05)*4, 183, 33, 170, 24, 157);
    bezierVertex(20+sin(variadorGrave*0.05)*4, 151, 51, 155, 52+sin(variadorGrave*0.05)*4, 128);
    bezierVertex(53+sin(variadorGrave*0.05)*4, 115, 60, 106, 61, 109);
    //bezierVertex(61, 117, 83, 147, 76, 167);
    //bezierVertex(71, 181, 80, 187, 78, 187);
    //bezierVertex(63, 183, 33, 170, 24, 157);
    //bezierVertex(20, 151, 51, 155, 52, 128);
    //bezierVertex(53, 115, 60, 106, 61, 109);
    endShape();
    pop();

    //CUrva 10
    let lerpedColor10 = lerpColor(this.curva10C1, this.curva10C2, this.colorInterpolation);
    push();
    translate(this.figureX, this.figureY);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor10);
    vertex(61, 122);
    bezierVertex(62, 122, 66, 129, 68, 138);
    bezierVertex(71, 145, 71, 151, 72, 155);
    bezierVertex(71, 152, 70, 146, 68, 140);
    bezierVertex(65, 129, 61, 122, 61, 122);
    endShape();
    pop();
    //CUrva 11
    let lerpedColor11 = lerpColor(this.curva11C1, this.curva11C2, this.colorInterpolation);
    push();
    translate(this.figureX, this.figureY);
    scale(this.figureScale);
    beginShape();
    fill(lerpedColor11);
    vertex(29, 158);
    bezierVertex(29, 158, 35, 163, 43, 168);
    bezierVertex(49, 172, 53, 174, 56, 176);
    bezierVertex(53, 175, 48, 172, 42, 169);
    bezierVertex(35, 164, 29, 158, 29, 158);
    endShape();
    pop();
  }
}

