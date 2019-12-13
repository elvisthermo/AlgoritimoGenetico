//variaveis globais
//@funcoes
let population,maxfitness,minfitness,meanfitiness;
// ciclo de vida
let lifespan = 200;
let generation = 0;
let generationP = 0;
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



let meanArrays,generationCount;

function setup() {
  createCanvas(400, 300);

  sliderPop = createSlider(20, 2000, 20,10);
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
  generationP = createP();
  target = createVector(width / 2, 50);
  population.graph()
}

function updateWidth(){
  generation =0;
  population = new Population(sliderPop.value());
  rw = sliderW.value();
}

function updateX() {
  generation =0;
  population = new Population(sliderPop.value());
  rx = sliderX.value();
}

function updateY() {
  generation =0;
  population = new Population(sliderPop.value());
  ry = sliderY.value();

}

function updateTime() {
  generation =0;
  paragraph2.html("Tempo de vida:"+sliderTime.value());
  population = new Population(sliderPop.value());
  return lifespan = sliderTime.value();
}

function updateForce() {
  generation =0;
  paragraph1.html("Força:"+sliderForce.value());
  population = new Population(sliderPop.value());
  maxforce = sliderForce.value();

}

function updatePop() {
  generation =0;
  paragraph.html("População:"+sliderPop.value());
  maxforce = sliderForce.value();
  population = new Population(sliderPop.value());

}

function resetPop() {
  generation =0;
  paragraph.html("População:"+sliderPop.value());
  maxforce = sliderForce.value();
  population = new Population(sliderPop.value());

}

function draw() {
  background(0);
  population.run();
  lifeP.html("tempo de vida:"+count);
  generationP.html("geração: "+generation);
  count++;

  if (count == lifespan) {
    let end = population.evaluate();
    if(end===1){
      updatePop();
      end = population.evaluate();
      population.stop();
    }

    population.selection();
    // Population = new Population();
    count = 0;
    generation++;
  }

  //draw barreira
  fill(255,0,0);
  rect(rx, ry, rw, rh);
  //draw target
  fill(0,255,0)
  ellipse(target.x, target.y, 16, 16);

}



