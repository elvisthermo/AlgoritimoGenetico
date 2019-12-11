//@população
//@seleção e @avaliaçaõ
function Population(pop) {
  // Array de individuos
  this.popsize = pop
  this.rockets = [];
  // Amount of rockets
  // parceiros para o cruzamento
  this.matingpool = [];

  for (let i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Individuo();
  }

  //função de avaliação
  this.evaluate = function() {

    var maxfit = 0;
    for (var i = 0; i < this.popsize; i++) {
      // Calculo de fitness
      this.rockets[i].calcFitness();
      // busca do maior fittnes
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }
    // Normaliza o  fitnesses
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit;
    }

    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
  }

  //Seleção dos gene dos filhos
  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;

      var child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Individuo(child);
    }
    this.rockets = newRockets;
  }

  // função de redraw desenho
  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}
