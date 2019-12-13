//@população
//@seleção e @avaliaçaõ
function Population(pop) {
  this.generationCount = [0];
  this.arrayMaxFittness = [0];
  this.arrayMinFittness = [0];
  this.arrayMeanFittness = [0];

  // Array de individuoss
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
      // if(this.rockets[i].fitness<minimofit){
        // minfitness = this.rockets[i].fitness;
      // }
    }
    // Normaliza o  fitnesses
    let test
    for (var i = 0; i < this.popsize; i++) {
          this.rockets[i].fitness /= maxfit;
          test = this.rockets[i].fitness;
          // minimofit = this.rockets[i].fitness /= minimofit;
    }

    console.log(arrayFittnes)




    //media
    function mean(array){
      let means = 0
      for (let i = 0; i <array.length ; i++) {
        means+=array[i]
      }
      means = means/array.length;
      return means;
    }

    function maximo(array){
      let max = -Infinity;
      for (let i = 1; i < array.length; ++i) {
        if (array[i] > max) {
          max = array[i];
        }
      }
      return max;
    }

    function minimo(array){
      let min = Infinity;
      for (let i = 1; i < array.length; ++i) {
        if (array[i] < min) {
          min = array[i];
        }
      }
      return min;
    }

    let min= minimo(arrayFittnes) // 1
    let max= maximo(arrayFittnes) // 1

    this.arrayMinFittness.push(min);
    let media = mean(arrayFittnes);
    this.arrayMeanFittness.push(media);
    this.arrayMaxFittness.push(max);
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
  }
  this.graph = function () {

    // window.onload = function() {
      var speedCanvas = document.getElementById("myChart").getContext('2d');
      Chart.defaults.global.defaultFontColor = "white";
      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontSize = 18;

      var meanline = {
        label: "Média do fittness",
        data: this.arrayMeanFittness,
        lineTension: 0,
        fill: false,
        borderColor: '#6d78ad'
      };

      var limSup = {
        label: "Limite Superior",
        data: this.arrayMaxFittness,
        lineTension: 0,
        fill: false,
        borderColor: '#51cda0'
      };

      var limInf = {
        label: "Limite Inferior",
        data: this.arrayMinFittness,
        lineTension: 0,
        fill: false,
        borderColor: '#ae6a75'
      };

      var speedData = {
        labels: this.generationCount,
        datasets: [meanline,limSup,limInf]
      };

      var chartOptions = {
        legend: {
          display: true,
          position: 'top',
          labels: {
            boxWidth: 80,
            fontColor: 'white'
          },

        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        data: speedData,
        options: chartOptions
      });



    // }


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
