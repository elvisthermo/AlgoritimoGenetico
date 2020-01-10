//@Cromossomo
//@fitness @crossoover @mutação
function Cromossomo(genes) {
  //poscruzamento inserindo o gene
  if (genes) {
    this.genes = genes;
  }
  //random
  else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      // ser força de movimento
      this.genes[i].setMag(maxforce);
    }
  }

  //crossover
  this.crossover = function(partner) {
    var newgenes = [];
    // seleção aaleatoria
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      // Se i for maior que o meio, o novo gene se não gene do parceiro
      if (i > mid) {
        newgenes[i] = this.genes[i];
      }
      else {
        newgenes[i] = partner.genes[i];
      }
    }
    //retorno dos novos genes
    return new Cromossomo(newgenes);
  }

  //mutação gerando um novo vetor aleatorio
  this.mutation = function() {
    for (var i = 0; i < this.genes.length; i++) {
      // < 0.01
      if (random(1) < 0.01) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(maxforce);
      }
    }
  }

}
