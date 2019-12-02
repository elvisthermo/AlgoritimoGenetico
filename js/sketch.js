//variaveis globais
//@func
let population;
// ciclo de vida
let lifespan = 400;
let lifeP;
// contagens dos frames
let count = 0;
// target
let target;
// força aplicada nos itens
let maxforce = 0.2;

// dimensões da barreira
let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);

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
