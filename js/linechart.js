function createGraph(mean,min,max,gen){

var speedCanvas = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontColor = "white";
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var meanline = {
    label: "Média do fittness",
    data: mean,
    lineTension: 0,
    fill: false,
    borderColor: '#6d78ad'
};

var limSup = {
    label: "Limite Superior",
    data: max,
    lineTension: 0,
    fill: false,
    borderColor: '#51cda0'
};

var limInf = {
    label: "Limite Inferior",
    data: min,
    lineTension: 0,
    fill: false,
    borderColor: '#ae6a75'
};

var speedData = {
    labels: gen,
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
}
