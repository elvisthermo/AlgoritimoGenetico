//variaveis globais
//@funcoes
let population;
// ciclo de vida
let lifespan = 200;
let lifeP;
// contagens dos frames
let count = 0;
// target
let target;
// força aplicada nos itens
let maxforce = 0.2;
let populacao = 50;
// dimensões da barreira
let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;


function setup() {
  createCanvas(400, 300);

  sliderPop = createSlider(20, 2000, 20);
  sliderPop.position(410, 10);
  sliderPop.style('width', '80px');

  paragraph = createP("População:20")
  paragraph.position(520, 0);

  sliderForce = createSlider(0.2, 4, 0.2,0.1);
  sliderForce.position(410, 30);
  sliderForce.style('width', '80px');

  paragraph1 = createP("Força:0.2")
  paragraph1.position(520, 20);

  sliderTime = createSlider(100, 400, 100);
  sliderTime.position(410, 50);
  sliderTime.style('width', '80px');

  paragraph2 = createP("Tempo de vida: 100")
  paragraph2.position(520, 40);


  paragraph3 = createP("obstáculo")
  paragraph3.position(420, 60);

  sliderX = createSlider(0, 255, 100);
  sliderX.position(410, 85);
  sliderX.style('width', '80px');

  paragraph4 = createP("Posição  X")
  paragraph4.position(520, 75);

  sliderY = createSlider(0, 255, 100);
  sliderY.position(410, 105);
  sliderY.style('width', '80px');

  paragraph5 = createP("Posição  Y")
  paragraph5.position(520, 90);


  sliderW = createSlider(200, 355, 100);
  sliderW.position(410, 125);
  sliderW.style('width', '80px');

  paragraph6 = createP("Largura")
  paragraph6.position(520, 115);


  sliderForce.input(updateForce);
  sliderPop.input(updatePop);
  sliderTime.input(updateTime);
  sliderX.input(updateX);
  sliderY.input(updateY);
  sliderW.input(updateWidth);

  population = new Population(sliderPop.value());
  lifeP = createP();
  target = createVector(width / 2, 50);

}

function updateWidth(){
  population = new Population(sliderPop.value());
  rw = sliderW.value();
}

function updateX() {
  population = new Population(sliderPop.value());
  rx = sliderX.value();
}

function updateY() {
  population = new Population(sliderPop.value());
  ry = sliderY.value();

}

function updateTime() {
  paragraph2.html("Tempo de vida:"+sliderTime.value());
  population = new Population(sliderPop.value());
  return lifespan = sliderTime.value();
}

function updateForce() {
  paragraph1.html("Força:"+sliderForce.value());
  population = new Population(sliderPop.value());
  maxforce = sliderForce.value();

}

function updatePop() {
  paragraph.html("População:"+sliderPop.value());
  maxforce = sliderForce.value();
  population = new Population(sliderPop.value());
}

function draw() {
  background(0);
  population.run();
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  //draw barreira
  fill(255,0,0);
  rect(rx, ry, rw, rh);
  //draw target
  fill(0,255,0)
  ellipse(target.x, target.y, 16, 16);
}




