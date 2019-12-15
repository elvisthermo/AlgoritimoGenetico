// @individuo
//calculo fittnes individual , update ,e show
function Individuo(dna) {
  // Physics of rocket at current instance
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  //tarefa completa
  this.completed = false;
  // bateu nas barreiras
  this.crashed = false;
  //inicializa pos crossover
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new Cromossomo();
  }
  this.fitness = 0;

  // forca de aceleração
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  // calculo de fittnes individual
  this.calcFitness = function() {
    //distancia do target para o individuo
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);

    // Maps range of fitness
    //condições de parada e morte
    this.fitness = map(d, 0, width, width, 0);
    if (this.completed) {
      this.fitness *= 10;
      console.log("finalizado",this.fitness)
    }

    if (this.crashed) {
      this.fitness /= 10;
    }

  }
  // Updates tela
  this.update = function() {
    // Check distancia
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);

    if (d < 10) {
      this.completed = true;
      this.pos = target.copy();
    }
    // Individuo nas barreiras
    if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
      this.crashed = true;
    }
    //laterais
    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    // top and bottom
    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }


    this.applyForce(this.dna.genes[count]);

    if (!this.completed && !this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }

  //draw individuo
  this.show = function() {
    push();
    //color
    noStroke();
    // fill(Math.random() * (255 - 0) + 0,Math.random() * (255 - 0) + 0,Math.random() * (255 - 0) + 0)
    fill(150, 255,10);
    // fill(0,255,100)
    //translate to the postion of rocket
    translate(this.pos.x, this.pos.y);
    // angulo de rotação
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 25, 5);
    pop();
  }

}
