// ---- CONFIGURACIÓN ----
let AMP_MIN = 0.02;
let AMP_MAX = 0.1;
let FREC_MIN = 75;
let FREC_MAX = 500;
let IMPRIMIR = true;
let AMORTIGUACION = 0.9;
let frequency;
let variador = 0;
let variadorGrave= 0;
//let variador = 0;

// ---- GESTOR ----
let gestorAmp;
let mic;
// ---- AMPLITUD ----
let amp;
let haySonido = false;
let haySilencio = true;
let antesHabiaSonido = false;

// ---- FRECUENCIA ----
let audioContext;
let frecuencia;
let frecuenciaAnterior;
let difDeFrecuencia;
const pichModel ='https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

// ---- CLASIFICADOR ----
let classifier;
const options = { probabilityThreshold: 0.9 };
let label;
let etiqueta;
const classModel = 'https://teachablemachine.withgoogle.com/models/wTs64URSi/';

// ---- CLASES ----
let Figura;
let Curvas;
let intensity;
let level;
let randomValue;
let claseActual = "Figura";
let tiempoRuidoFondo = 0;
let duracionRuidoFondo = 8000;


function preload() {
  classifier = ml5.soundClassifier(classModel + 'model.json', options);
}

function setup() {
  createCanvas(615, 498);
  colorMode(RGB);
  background(150, 150, 150);


  // GESTOR
  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);
  gestorAmp.f = AMORTIGUACION;

  audioContext = getAudioContext();

  mic = new p5.AudioIn();
  mic.start(startPitch);
  amplitude = new p5.Amplitude();

  classifier.classify(gotResult);

  userStartAudio();
  randomValue = random();
  Curvas = new Curva();
  Figura = new Figuras();
}

function draw() {
  // GESTOR
  gestorAmp.actualizar(mic.getLevel());
  let amp = gestorAmp.filtrada;
  console.log(label);
  claseActualejecutar();

  haySonido = amp > AMP_MIN;

  difDeFrecuencia = frecuencia - frecuenciaAnterior;

  antesHabiaSonido = haySonido;
  frecuenciaAnterior = frecuencia;

  if (label === "Ruido de fondo") {
    if (haySonido) {
      tiempoRuidoFondo = 0;
    } else {
      tiempoRuidoFondo += deltaTime;
      if (tiempoRuidoFondo >= duracionRuidoFondo) {
        cambiarClase();
        tiempoRuidoFondo = 0;
      }
    }
  } else {
    tiempoRuidoFondo = 0;
  }
}

function claseActualejecutar() {
  if (claseActual === "Figura" ) {
    Figura.draw();
    Figura.updateColorInterpolation();
    
  } else if (claseActual === "Curvas") {
    Curvas.draw();
    Curvas.updateColorInterpolation();
  }
}


function cambiarClase() {
  if (claseActual === "Figura") {
    claseActual = "Curvas";
  } else {
    claseActual = "Figura";
  }
}

function startPitch() {
  pitch = ml5.pitchDetection(pichModel, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();

}




function getPitch() {
  pitch.getPitch(function (err, frequency) {
    if (frequency) {
      frecuencia = frequency;
    } else {
    }
    getPitch();
  });
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  }
  label = results[0].label;
  etiqueta = label;
}

function imprimirData() {
  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;
  console.log('amplitud: ' + amp);
  text(texto, 10, 20);

  console.log('frecuencia: ' + frecuencia);
  text(texto, 10, 40);

  texto = 'dif de frecuencia: ' + difDeFrecuencia;
  text(texto, 10, 60);

  texto = 'clase: ' + etiqueta;
  text(texto, 10, 80);
  pop();
}

function frecuen() {
  let spectrum = fft.analyze();
  let dominantFreq = fft.getEnergy('bass', 'treble');
  let graveThreshold = 20;
  let agudoThreshold = 100;

  if (dominantFreq < graveThreshold) {
    console.log('Sonido grave');
  } else if (dominantFreq > agudoThreshold) {
    console.log('Sonido agudo');
  } else {
    console.log('Otros sonidos');
  }

  background(0);
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(255);
    rect(x, height, width / spectrum.length, h);
  }
}
