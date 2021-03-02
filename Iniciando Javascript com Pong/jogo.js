// declarando variáveis responsáveis pelos valores utilizados na função circle()

// A função circle é responsável por desenhar um círculo na tela, baseado nos valores informados nas variáveis xBolinha, yBolinha e diametro

//xBolinha = Centro do círculo

//Programa em desenvolvimento para jogar o famoso "Pong".

let xBolinha = 300;
let yBolinha = 200;
let diametro = 15
let raio = diametro / 2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro)
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  //width = largura da tela
  
  if (xBolinha + raio> width || xBolinha -raio <0) {
    
    velocidadeXBolinha *= -1;
  }
  
  //heigt = tamanho da tela
  
  if (yBolinha + raio> height || yBolinha -raio <0) {
    velocidadeYBolinha *= -1
    
  }
  
}