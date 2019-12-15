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


let rx2 = 100;
let ry2 = 150;
let rw2 = 200;
let rh2 = 10;



let meanArrays =[],maxArrays=[],minArrays=[],generationCount=0;

function setup() {
  createCanvas(400, 300);
  createMenu();

  population = new Population(sliderPop.value());
  lifeP = createP();
  generationP = createP();
  target = createVector(width / 2, 50);
  population.graph()
}

function createGraph1() {
  let gen = generateArr(maxArrays[0].length);
  population.setGraph(meanArrays[0],minArrays[0],maxArrays[0],gen);
}


function createGraph2() {
  let gen = generateArr(maxArrays[1].length);
  population.setGraph(meanArrays[1],minArrays[1],maxArrays[1],gen);
}

function createGraph3() {
  let gen = generateArr(maxArrays[2].length);
  population.setGraph(meanArrays[2],minArrays[2],maxArrays[2],gen);
}

function genatationGraph_mean() {
  let mean_vis = normalizeArrays(meanArrays[0],meanArrays[1],meanArrays[2])
  let min_vis = normalizeArrays(minArrays[0],minArrays[1],minArrays[2])
  let max_vis = normalizeArrays(maxArrays[0],maxArrays[1],maxArrays[2])

  let gen = generateArr(mean_vis.length);
  population.setGraph(mean_vis,min_vis,max_vis,gen);
}

function updateTarget() {
  generation =0;
  population = new Population(sliderPop.value());
  target =  createVector(sliderTargetX.value(),sliderTargetY.value());
}

function  updateObj1() {
  generation =0;
  population = new Population(sliderPop.value());
  ry = sliderY.value();
  rx = sliderX.value();
  rw = sliderW.value();

}

function  updateObj2() {
  generation =0;
  population = new Population(sliderPop.value());
  rw2 = sliderW_obj.value();
  rx2 = sliderX_obj.value();
  ry2 = sliderY_obj.value();

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
  button1.mousePressed(createGraph1);
  button2.mousePressed(createGraph2);
  button3.mousePressed(createGraph3);
  button4.mousePressed(genatationGraph_mean);

  background(0);
  population.run();
  lifeP.html("tempo de vida:"+count);
  generationP.html("geração: "+generation);
  count++;

  if (count == lifespan) {
    let end = population.evaluate();
    if(end===1){
      generationCount++;
      // alert(generationCount);
      let mean =population.getArrayFitnnesMeans()
      let max = population.getArrayFitnnesMax()
      let min = population.getArrayFitnnesMin()
      meanArrays.push(mean);
      maxArrays.push(max);
      minArrays.push(min);

      updatePop();
      end = population.evaluate();
      if(generationCount===3){
        population.stop = true;
      }
    }
    population.selection();
    count = 0;
    generation++;
  }

  //draw barreira
  fill("deeppink");
  rect(rx2, ry2, rw2, rh2);
  rect(rx, ry, rw, rh);
  //draw target
  fill(0,255,0)
  ellipse(target.x, target.y, 16, 16);

}

function createMenu(){
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

  sliderTime = createSlider(100, 400, 100,50);
  sliderTime.position(410, 50);
  sliderTime.style('width', '80px');

  paragraph2 = createP("Tempo de vida: 100")
  paragraph2.position(520, 40);


  paragraph3 = createP("obstáculo 1")
  paragraph3.position(420, 60);

  paragraph4 = createP("Posição  X")
  paragraph4.position(720, 75);

  paragraph5 = createP("Posição  Y")
  paragraph5.position(720, 90);

  paragraph6 = createP("Largura")
  paragraph6.position(720, 115);

  //button barreita1
  sliderX = createSlider(0, 255, 100);
  sliderX.position(410, 85);
  sliderX.style('width', '80px');

  sliderY = createSlider(0, 255, 100);
  sliderY.position(410, 105);
  sliderY.style('width', '80px');


  sliderW = createSlider(200, 355, 100);
  sliderW.position(410, 125);
  sliderW.style('width', '80px');


  //obstaculo 2
  paragraph_ob2 = createP("obstáculo 2")
  paragraph_ob2.position(520, 60);

  sliderX_obj = createSlider(0, 255, 100);
  sliderX_obj.position(510, 85);
  sliderX_obj.style('width', '80px');

  sliderY_obj = createSlider(0, 255, 100);
  sliderY_obj.position(510, 105);
  sliderY_obj.style('width', '80px');

  sliderW_obj = createSlider(200, 355, 100);
  sliderW_obj.position(510, 125);
  sliderW_obj.style('width', '80px');


  //target

  paragraph_targer = createP("Target")
  paragraph_targer.position(620, 60);

  sliderTargetX = createSlider(0, 400, 200,1);
  sliderTargetX.position(610, 85);
  sliderTargetX.style('width', '80px');

  sliderTargetY = createSlider(0, 50, 50,1);
  sliderTargetY.position(610, 105);
  sliderTargetY.style('width', '80px');


  //execução graficos
  button1 = createButton('Execução 1');
  button1.position(410, 160);

  button2 = createButton('Execução 2');
  button2.position(510, 160);

  button3 = createButton('Execução 3');
  button3.position(610, 160);

  button4 = createButton('Media das 3 Execuções ');
  button4.position(710, 160);

  sliderForce.input(updateForce);
  sliderPop.input(updatePop);
  sliderTime.input(updateTime);
  sliderX.input(updateObj1);
  sliderY.input(updateObj1);
  sliderW.input(updateObj1);
  sliderX_obj.input(updateObj2);
  sliderY_obj.input(updateObj2);
  sliderW_obj.input(updateObj2);
  sliderTargetY.input(updateTarget);
  sliderTargetX.input(updateTarget);

}

