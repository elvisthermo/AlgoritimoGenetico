//@população
//@seleção e @avaliaçaõ
function Population(pop) {
  this.generationCount = [0];
  this.arrayMaxFittness_1 = [0];
  this.arrayMinFittness_1 = [0];
  this.arrayMeanFittness_1 = [0];
  this.stop = false;
  this.end_execution =0;

  // Array de individuoss
  this.popsize = pop
  this.rockets = [];
  // Amount of rockets
  // parceiros para o cruzamento
  this.matingpool = [];

  for (let i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Individuo();
  }

  this.rocketsReset = function () {
    for (let i = 0; i < this.popsize; i++) {
      this.rockets[i] = new Individuo();
    }
  }

  //função de avaliação
  this.evaluate = function() {

    var maxfit = 0;
    let minimofit = 1000000
    let arrayFittnes = []

    for (var i = 0; i < this.popsize; i++) {
      // Calculo de fitness
      this.rockets[i].calcFitness();
      // busca do maior fittnes
      arrayFittnes.push(this.rockets[i].fitness/4000);
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;

      }

    }
    // Normaliza o  fitnesses
    for (var i = 0; i < this.popsize; i++) {
          this.rockets[i].fitness /= maxfit;

    }

    console.log(arrayFittnes)

    let min= minimo(arrayFittnes) // 1
    let max= maximo(arrayFittnes) // 1

    this.arrayMinFittness_1.push(min);
    let media = mean(arrayFittnes);
    this.arrayMeanFittness_1.push(media);
    this.arrayMaxFittness_1.push(max);
    console.log("maxfit",maxfit/4000);
    console.log("arrayfittness",arrayFittnes)
    console.log("Max:",max);
    console.log("Min:",min);
    console.log("mean",media);

    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
    this.generationCount.push(this.generationCount.length)

    this.graph();

    if(max===1)
      this.end_execution++;

    //reset functions
    if(this.end_execution ===5){
      // // this.rockets =[];
      // this.matingpool = [];
      // this.rocketsReset();
      // this.generationCount = [0];
      return 1;
    }

  }
  this.setArrayFitnnesMeans = function (arr) {
    this.arrayMeanFittness_1 = arr;
  }

  this.getArrayFitnnesMeans = function () {
    return this.arrayMeanFittness_1;
  }

  this.setArrayFitnnesMax = function (arr) {
    this.arrayMaxFittness_1 = arr;
  }

  this.getArrayFitnnesMax = function () {
    return this.arrayMaxFittness_1;
  }

  this.setArrayFitnnesMin = function (arr) {
    this.arrayMinFittness_1 =arr;
  }


  this.getArrayFitnnesMin = function () {
    return this.arrayMinFittness_1;
  }

  this.graph = function () {

    createGraph(this.arrayMeanFittness_1,this.arrayMinFittness_1,this.arrayMaxFittness_1,this.generationCount);
    // }

  }

  this.setGraph = function (mean,min,max,generation) {
    this.arrayMaxFittness_1 = max;
    this.arrayMinFittness_1 = min;
    this.arrayMeanFittness_1 = mean;
    this.generationCount = generation;

    this.graph();

  }

  //Seleção dos gene dos filhos
  this.selection = function() {
    let newRockets = [];

    for (let i = 0; i < this.rockets.length; i++) {
      let parentA = random(this.matingpool).dna;
      let parentB = random(this.matingpool).dna;

      let child = parentA.crossover(parentB);
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
    if (this.stop){
      noLoop();
    }

  }
}
