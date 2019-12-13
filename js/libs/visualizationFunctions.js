function CountGenerations(count) {
    let arr = count++
    // let arr = [];
    // for (let i = 0; i <count ; i++) {
    //     arr.push(i);
    // }
    // console.log(arr);
    return arr;
}


function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

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
