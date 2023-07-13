class Figuras{
    constructor(){
    this.shapeScale = 2; // Adjust the scale factor as needed
    
    this.rectWidth = 638;
    this.rectHeight = 507;
    this.rectX = (width - this.rectWidth) / 2;
    this.rectY = (height - this.rectHeight) / 2;
    this.saturationSpeed = 0.01;
    this.backgroundSaturation = 0; // Valor inicial de saturación del color de fondo
    this.backgroundDesaturation = 0; // Valor inicial de desaturación del color de fondo
    //saturationSpeed = 0.01; // Velocidad de cambio de saturación
    this.desaturationSpeed = 0.01; 
    
      //forma 1
       //this.forma1 = color(236,253,255);
      this.forma1C1 = color(217,251,255);
      this.forma1C2 = color(209,226,228);
    
      //forma 2
      //this.forma2 = color(173, 157, 219);
      this.forma2C1 = color(154, 119, 255);
      this.forma2C2 = color(207, 197, 249);
    
      //forma 3
      //this.forma3 = color(255,210, 74);
      this.forma3C1 = color(255,196, 16);
      this.forma3C2 = color(255,225,141);
    
      //forma 4
      //this.forma4 = color(254, 142, 23);
      this.forma4C1 = color(255, 131, 1);
      this.forma4C2 = color(255, 190, 131);
    
      //forma 7
      //this.forma7 = color(254, 141, 33);
      this.forma7C1 = color(255, 125, 0);//sat
      this.forma7C2 = color(255, 197, 149);//desat
    
      //forma 8
       //this.forma8 = color(254, 141, 33);
      this.forma8C1 = color(255, 125, 0);//sat
      this.forma8C2 = color(255, 197, 149);//desat
    
      //forma 9
      //this.forma9 = color(173, 157, 219);
      this.forma9C1 = color(154, 119, 255);
      this.forma9C2 = color(207, 197, 249);
    
      //forma 10
      //this.forma10C1 = color(255,196, 16);
      this.forma10C1 = color(255,192, 0);
      this.forma10C2 = color(255,225,141);
    
      //forma 11
       //this.curva4 = color(236,253,255);
      this.forma11C1 = color(217,251,255);//sat
      this.forma11C2 = color(209,226,228);//desat
    
      //forma 12
       //this.curva4 = color(236,253,255);
      this.forma12C1 = color(217,251,255);//sat
      this.forma12C2 = color(209,226,228);//desat
    
      //forma 13
      //this.forma13C1 = color(254, 141, 33);//
      this.forma13C1 = color(255, 125, 0);//sat
      this.forma13C2 = color(255, 197, 149);//desat

      this.colorInterpolation = 0;
      this.colorStep = 0.01;
      this.saturation= 50;
      this.luminosidad= 40;

      this.shadowOffsetX = 5;
      this.shadowOffsetY = 5;
      this.shadowBlur = 10;
      this.shadowColor = 'rgba(0, 0, 0, 0.5)';
       
      this.figuraContainer = document.querySelector('.figura-container');
    }
  
    updateColorInterpolation() {
      if (label === "agudo") {
        this.saturation= 100;
        this.luminosidad= 80;
        this.colorInterpolation = lerp(this.colorInterpolation, 0, 0.02); // Cambio gradual hacia 0
        variador++;
      } else if (label === "grave") {
        this.saturation= 35;
        this.luminosidad= 35;
        this.colorInterpolation = lerp(this.colorInterpolation, 1, 0.02); // Cambio gradual hacia 1
        variadorGrave++;
      }  else if (label === "Ruido de fondo"){
        this.saturation= 50;
        this.luminosidad= 40;
      } 

    }
    
    draw(){
    
      pop();
      push();
      let gradient = drawingContext.createLinearGradient(0, 0, height, 0);
      gradient.addColorStop(0.3, `hsl(180, ${this.saturation}%, 94%)`);
      gradient.addColorStop(1,  `hsl(151, ${this.saturation}%, 83%)`);
      gradient.addColorStop(0.5, `hsl(177, ${this.saturation}%, 87%)`);
      
      // Establece el gradiente como fondo del lienzo
      drawingContext.fillStyle = gradient;
      drawingContext.fillRect(0, 0, width, height);
      pop();

      let gradient1 = drawingContext.createLinearGradient(0, 0, 0, height);
      gradient1.addColorStop(1, `hsl(158, ${this.saturation}%, 88%)`);
      gradient1.addColorStop(0.7, `hsl(105, ${this.saturation}%, 85%)`);
      gradient1.addColorStop(0.3, `hsl(105, ${this.saturation}%, 82%)`);
      beginShape();
        vertex(this.rectX + 3, this.rectY + 503);
        bezierVertex(this.rectX + 29, this.rectY + 457, this.rectX + 65, this.rectY + 393, this.rectX + 113, this.rectY + 320);
        bezierVertex(this.rectX + 187, this.rectY + 208, this.rectX + 224, this.rectY + 150, this.rectX + 285, this.rectY + 104);
        bezierVertex(this.rectX + 326, this.rectY + 68, this.rectX + 413, this.rectY + 15, this.rectX + 554, this.rectY + 0);
        bezierVertex(this.rectX + 582, this.rectY + 0, this.rectX + 604, this.rectY + 0, this.rectX + 632, this.rectY + 0);
        bezierVertex(this.rectX + 634, this.rectY + 70, this.rectX + 634, this.rectY + 143, this.rectX + 636, this.rectY + 212);
        bezierVertex(this.rectX + 601, this.rectY + 228, this.rectX + 566, this.rectY + 245, this.rectX + 531, this.rectY + 261);
        bezierVertex(this.rectX + 355, this.rectY + 342, this.rectX + 180, this.rectY + 422, this.rectX + 3, this.rectY + 503);
        endShape();

        drawingContext.fillStyle = gradient1;
        drawingContext.fill();

        let gradient2 = drawingContext.createLinearGradient(0, 0, 0, height);
        gradient2.addColorStop(1, `hsl(188, ${this.saturation}%, 78%)`);
        gradient2.addColorStop(0.7, `hsl(188, ${this.saturation}%, 86%)`);
        gradient2.addColorStop(0.3, `hsl(182, ${this.saturation}%, 90%)`);

        beginShape();
        vertex(this.rectX + 3, this.rectY + 503);
        bezierVertex(this.rectX + 44, this.rectY + 482, this.rectX + 101, this.rectY + 454, this.rectX + 168, this.rectY + 416);
        bezierVertex(this.rectX + 291, this.rectY + 346, this.rectX + 352, this.rectY + 311, this.rectX + 390, this.rectY + 256);
        bezierVertex(this.rectX + 454, this.rectY + 164, this.rectX + 422, this.rectY + 96, this.rectX + 488, this.rectY + 39);
        bezierVertex(this.rectX + 534, this.rectY + 0, this.rectX + 591, this.rectY + 0, this.rectX + 536, this.rectY + 0);
        bezierVertex(this.rectX + 638, this.rectY + 63, this.rectX + 638, this.rectY + 132, this.rectX + 638, this.rectY + 201);
        bezierVertex(this.rectX + 584, this.rectY + 255, this.rectX + 496, this.rectY + 342, this.rectX + 362, this.rectY + 407);
        bezierVertex(this.rectX + 215, this.rectY + 477, this.rectX + 80, this.rectY + 496, this.rectX + 3, this.rectY + 503);
        endShape();

        drawingContext.fillStyle = gradient2;
        drawingContext.fill();

        //Curva1
        push();
       let lerpedColor1f = lerpColor(this.forma1C1, this.forma1C2, this.colorInterpolation);
        beginShape();
        fill(lerpedColor1f);
        noStroke();
        drawingContext.shadowOffsetX = this.shadowOffsetX;
        drawingContext.shadowOffsetY = this.shadowOffsetY;
        drawingContext.shadowBlur = this.shadowBlur;
        drawingContext.shadowColor = this.shadowColor;
        vertex(this.rectX + 100, this.rectY + 31);
        bezierVertex(this.rectX + 66.5, this.rectY + 103.5, this.rectX + 17.5, this.rectY + 301.5, this.rectX + 36.2, this.rectY + 226.9);
        bezierVertex(this.rectX + 11.5, this.rectY + 355.5, this.rectX + 5.5, this.rectY + 416.5, this.rectX + 10.6, this.rectY + 367.7);
        bezierVertex(this.rectX + 5.5, this.rectY + 454.5, this.rectX + 4, this.rectY + 454.5, this.rectX + 2.5, this.rectY + 454.5);
        bezierVertex(this.rectX + 2.5, this.rectY + 417.5, this.rectX + 2.2, this.rectY + 322.3, this.rectX + 5.5, this.rectY + 417.5);
        bezierVertex(this.rectX + 5.5, this.rectY + 417.5, this.rectX + 0.5, this.rectY + 277.5, this.rectX + 1.2, this.rectY + 322.4);
        bezierVertex(this.rectX + 0.5, this.rectY + 273.9, this.rectX + 1, this.rectY + 265, this.rectX + 2.5, this.rectY + 250.5);
        bezierVertex(this.rectX + 6.5, this.rectY + 209.5, this.rectX + 31.6, this.rectY + 148.4, this.rectX + 57.5, this.rectY + 86.5);
        bezierVertex(this.rectX + 93.5, this.rectY + 27.5, this.rectX + 105.5, this.rectY + 34.5, this.rectX + 100, this.rectY + 31);
        endShape();
       pop();
      
        let lerpedColor2f = lerpColor(this.forma2C1, this.forma2C2, this.colorInterpolation);
        beginShape();
        fill(lerpedColor2f);
        vertex(this.rectX + 611, this.rectY + 12);
         bezierVertex(this.rectX + 550, this.rectY + 43, this.rectX + 210+sin(variadorGrave*0.05)*6, this.rectY + 332, this.rectX + 167, this.rectY + 329);
         bezierVertex(this.rectX + 159+sin(variadorGrave*0.05)*9, this.rectY + 329, this.rectX + 160, this.rectY + 287, this.rectX + 202, this.rectY + 268);
         bezierVertex(this.rectX + 332, this.rectY + 218, this.rectX + 370, this.rectY + 211, this.rectX + 529, this.rectY + 15);
         bezierVertex(this.rectX + 553+sin(variadorGrave*0.05)*6, this.rectY - 15, this.rectX + 623+sin(variadorGrave*0.05)*10, this.rectY + 7, this.rectX + 611, this.rectY + 12);
         endShape();

        let lerpedColor3f = lerpColor(this.forma3C1, this.forma3C2, this.colorInterpolation);
        beginShape();
        fill(lerpedColor3f);
        noStroke();
        vertex(this.rectX + 426, this.rectY + 43);
            bezierVertex(this.rectX + 329, this.rectY + 78, this.rectX + 233, this.rectY + 198, this.rectX + 250, this.rectY + 176);
            bezierVertex(this.rectX + 212, this.rectY + 229, this.rectX + 208, this.rectY + 225, this.rectX + 210, this.rectY + 227);
            bezierVertex(this.rectX + 425, this.rectY + 39+sin(variador*0.05)*10, this.rectX + 429, this.rectY + 46, this.rectX + 426, this.rectY + 43);
            endShape();
    

        let lerpedColor4f = lerpColor(this.forma4C1, this.forma4C2, this.colorInterpolation);
        push();
        beginShape();
        fill(lerpedColor4f);
        noStroke();
        vertex(this.rectX + 433, this.rectY + 151);
        bezierVertex(this.rectX + 428, this.rectY + 189+sin(variador*0.05)*30, this.rectX + 396, this.rectY + 304, this.rectX + 255, this.rectY + 369);
        bezierVertex(this.rectX + 126, this.rectY + 435, this.rectX + 23, this.rectY + 503, this.rectX + 23, this.rectY + 496);
        bezierVertex(this.rectX + 18, this.rectY + 488, this.rectX + 148, this.rectY + 422, this.rectX + 296, this.rectY + 312);
        bezierVertex(this.rectX + 416, this.rectY + 224+sin(variador*0.05)*6, this.rectX + 434, this.rectY + 138, this.rectX + 433, this.rectY + 151);
        endShape();
 
  
        let gradient5 = drawingContext.createLinearGradient(0, 0, height, 0);
        gradient5.addColorStop(0, `hsl(180, ${this.saturation}%, 94%)`);
        gradient5.addColorStop(0.3, `hsl(186, ${this.saturation}%, 87%)`);
        gradient5.addColorStop(0.8, `hsl(210, 14%, ${this.luminosidad}%)`);
        gradient5.addColorStop(1, `hsl(210, 13%, ${this.luminosidad}%)`); 
  
        //let lerpedColor5f = lerpColor(this.forma5C1, this.forma5C2, this.colorInterpolation);
        push();
        beginShape();
        noStroke();
        vertex(this.rectX + 639, this.rectY + 267);
         bezierVertex(this.rectX + 629, this.rectY + 276, this.rectX + 569, this.rectY + 421, this.rectX + 418+sin(variadorGrave*0.05)*30, this.rectY + 463);
         bezierVertex(this.rectX + 203, this.rectY + 523+sin(variadorGrave*0.05)*10, this.rectX + 9, this.rectY + 499, this.rectX + 24, this.rectY + 495);
         bezierVertex(this.rectX + 36+sin(variadorGrave*0.05)*30, this.rectY + 490, this.rectX + 169+sin(variadorGrave*0.05)*30, this.rectY + 503, this.rectX + 352, this.rectY + 433);
         bezierVertex(this.rectX + 541, this.rectY + 365, this.rectX + 629, this.rectY + 276, this.rectX + 639, this.rectY + 267);
         endShape();
         pop();
 

        drawingContext.fillStyle = gradient5;
        drawingContext.fill();
      
        //let lerpedColor6f = lerpColor(this.forma6C1, this.forma6C2, this.colorInterpolation);

        
        let gradient6 = drawingContext.createLinearGradient(0, 0, 0, height);
        gradient6.addColorStop(0, `hsl(210, 13%, ${this.luminosidad}%)`);
        gradient6.addColorStop(0.3, `hsl(210, 14%, ${this.luminosidad}%)`);
        gradient6.addColorStop(0.6,  `hsl(186, ${this.saturation}%, 87%)`);
        gradient6.addColorStop(1, `hsl(180, ${this.saturation}%, 94%)`); 
        push();
       beginShape();
       noStroke();
       vertex(this.rectX + 413, this.rectY + 6);
       bezierVertex(this.rectX + 434+sin(variadorGrave*0.05)*30, this.rectY + 15, this.rectX + 318, this.rectY + 56, this.rectX + 260, this.rectY + 93);
       bezierVertex(this.rectX + 40, this.rectY + 237+sin(variadorGrave*0.05)*20, this.rectX + 23, this.rectY + 483, this.rectX + 10, this.rectY + 475);
       bezierVertex(this.rectX - 11, this.rectY + 466, this.rectX + 52+sin(variadorGrave*0.05)*30, this.rectY + 16, this.rectX + 281, this.rectY + 2);
       bezierVertex(this.rectX + 332, this.rectY -1, this.rectX + 391, this.rectY - 2, this.rectX + 413, this.rectY + 6);
       endShape();
      pop();
      
      drawingContext.fillStyle = gradient6;
      drawingContext.fill();

      let lerpedColor7f = lerpColor(this.forma7C1, this.forma7C2, this.colorInterpolation);
      beginShape();
      fill(lerpedColor7f);
      noStroke();
      vertex(this.rectX + 506, this.rectY + 115);
       bezierVertex(this.rectX + 510, this.rectY + 116, this.rectX + 498, this.rectY + 174, this.rectX + 463, this.rectY + 233);
       bezierVertex(this.rectX + 418, this.rectY + 312+sin(variador*0.05)*10, this.rectX + 352, this.rectY + 354, this.rectX + 349, this.rectY + 354);
       bezierVertex(this.rectX + 346, this.rectY + 352, this.rectX + 388, this.rectY + 317, this.rectX + 433, this.rectY + 252);
       bezierVertex(this.rectX + 487, this.rectY + 177, this.rectX + 503, this.rectY + 116, this.rectX + 506, this.rectY + 115);
       endShape();
      
      let lerpedColor8f = lerpColor(this.forma8C1, this.forma8C2, this.colorInterpolation);
      beginShape();
      fill(lerpedColor8f);
      noStroke();
      vertex(this.rectX + 637, this.rectY + 364);
       bezierVertex(this.rectX + 637, this.rectY + 410, this.rectX + 637, this.rectY + 456, this.rectX + 637, this.rectY + 502);
       bezierVertex(this.rectX + 554, this.rectY + 502, this.rectX + 468, this.rectY + 502, this.rectX + 338, this.rectY + 502);
       bezierVertex(this.rectX + 425, this.rectY + 499, this.rectX + 482, this.rectY + 485+sin(variador*0.05)*10, this.rectX + 543+sin(variador*0.05)*10, this.rectY + 447);
       bezierVertex(this.rectX + 587, this.rectY + 419, this.rectX + 618, this.rectY + 385, this.rectX + 637, this.rectY + 364);
       endShape();


      let lerpedColor9f = lerpColor(this.forma9C1, this.forma9C2, this.colorInterpolation);
      beginShape();
      fill(lerpedColor9f);
      noStroke();
     vertex(this.rectX + 35, this.rectY + 18);
       bezierVertex(this.rectX + 2+sin(variadorGrave*0.05)*8, this.rectY - 27, this.rectX + 176, this.rectY + 143, this.rectX + 151, this.rectY + 271);
       bezierVertex(this.rectX + 124, this.rectY + 400, this.rectX + 75, this.rectY + 434, this.rectX + 7, this.rectY + 496);
       bezierVertex(this.rectX + 0, this.rectY + 503+sin(variadorGrave*0.05)*8, this.rectX + 80, this.rectY + 323, this.rectX + 127, this.rectY + 283);
       bezierVertex(this.rectX + 176, this.rectY + 246, this.rectX + 45, this.rectY + 33, this.rectX + 35, this.rectY + 18);
       endShape();
      
      let lerpedColor10f = lerpColor(this.forma10C1, this.forma10C2, this.colorInterpolation);
      beginShape();
      fill(lerpedColor10f);
      noStroke();
      vertex(this.rectX + 609, this.rectY + 63);
       bezierVertex(this.rectX + 608, this.rectY + 88, this.rectX + 600, this.rectY + 122, this.rectX + 582, this.rectY + 158);
       bezierVertex(this.rectX + 538, this.rectY + 250, this.rectX + 456, this.rectY + 287, this.rectX + 428, this.rectY + 300);
       bezierVertex(this.rectX + 459, this.rectY + 273+sin(variador*0.05)*10, this.rectX + 498, this.rectY + 237, this.rectX + 535, this.rectY + 187);
       bezierVertex(this.rectX + 569, this.rectY + 143, this.rectX + 593, this.rectY + 96+sin(variador*0.05)*10, this.rectX + 609, this.rectY + 63);
       endShape();

      push();
      let lerpedColor11f = lerpColor(this.forma11C1, this.forma11C2, this.colorInterpolation);
      beginShape();
      fill(lerpedColor11f);
      noStroke();
      drawingContext.shadowOffsetX = this.shadowOffsetX;
      drawingContext.shadowOffsetY = this.shadowOffsetY;
      drawingContext.shadowBlur = this.shadowBlur;
      drawingContext.shadowColor = this.shadowColor;
      vertex(this.rectX + 215, this.rectY + 142);
      bezierVertex(this.rectX + 218, this.rectY + 143, this.rectX + 193, this.rectY + 177, this.rectX + 172, this.rectY + 227);
      bezierVertex(this.rectX + 138, this.rectY + 315, this.rectX + 143, this.rectY + 384, this.rectX + 140, this.rectY + 384);
      bezierVertex(this.rectX + 137, this.rectY + 385, this.rectX + 125+sin(variadorGrave*0.05)*8, this.rectY + 298, this.rectX + 166, this.rectY + 212);
      bezierVertex(this.rectX + 186, this.rectY + 173, this.rectX + 213, this.rectY + 143, this.rectX + 215, this.rectY + 142);
      endShape();
      pop();
      push();
      let lerpedColor12f = lerpColor(this.forma12C1, this.forma12C2, this.colorInterpolation);
      beginShape();
      fill(lerpedColor12f);
      noStroke();
      drawingContext.shadowOffsetX = this.shadowOffsetX;
      drawingContext.shadowOffsetY = this.shadowOffsetY;
      drawingContext.shadowBlur = this.shadowBlur;
      drawingContext.shadowColor = this.shadowColor;
      vertex(this.rectX + 458, this.rectY + 317);
       bezierVertex(this.rectX + 461, this.rectY + 320, this.rectX + 426, this.rectY + 365, this.rectX + 373+sin(variadorGrave*0.05)*8, this.rectY + 402);
       bezierVertex(this.rectX + 263+sin(variadorGrave*0.05)*30, this.rectY + 482, this.rectX + 139+sin(variadorGrave*0.05)*30, this.rectY + 485, this.rectX + 139, this.rectY + 480);
       bezierVertex(this.rectX + 140, this.rectY + 477, this.rectX + 236, this.rectY + 467, this.rectX + 350, this.rectY + 397);
       bezierVertex(this.rectX + 417, this.rectY + 356, this.rectX + 456, this.rectY + 314, this.rectX + 458, this.rectY + 317);
      endShape();
      let lerpedColor13f = lerpColor(this.forma13C1, this.forma13C2, this.colorInterpolation);
      beginShape();
      pop();

      fill(lerpedColor13f);
      noStroke();
      vertex(this.rectX + 263, this.rectY + 300);
       bezierVertex(this.rectX + 263, this.rectY + 301, this.rectX + 237, this.rectY + 323, this.rectX + 197, this.rectY + 350+sin(variador*0.05)*5);
       bezierVertex(this.rectX + 120+sin(variador*0.05)*10, this.rectY + 404, this.rectX + 92, this.rectY + 411, this.rectX + 47, this.rectY + 454);
       bezierVertex(this.rectX + 20, this.rectY + 482, this.rectX + 9, this.rectY + 500, this.rectX + 8, this.rectY + 499);
       bezierVertex(this.rectX + 7, this.rectY + 498, this.rectX + 48, this.rectY + 418, this.rectX + 126, this.rectY + 375);
       bezierVertex(this.rectX + 140, this.rectY + 369, this.rectX + 142, this.rectY + 369, this.rectX + 169, this.rectY + 354);
       bezierVertex(this.rectX + 228, this.rectY + 325, this.rectX + 263, this.rectY + 299, this.rectX + 263, this.rectY + 300);
       endShape();

      
      }
    
    
    
    
    
    } 
    
    
