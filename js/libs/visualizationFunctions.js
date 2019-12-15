function CountGenerations(count) {
    let arr = count++
    // let arr = [];
    // for (let i = 0; i <count ; i++) {
    //     arr.push(i);
    // }
    // console.log(arr);
    return arr;
}

function generateArr(arr){
    let array =[]
    for (let i = 0; i <arr ; i++) {
        array.push(i)
    }
    return array;
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

function normalizeArrays(array1,array2,array3) {
    let arraymean = [];
    let max = Math.max(array1.length,array2.length,array3.length);

    for (let i = 0; i <max ; i++) {
        if (array1[i] === undefined){
            array1[i] = array1[i-1];
        }
        if (array2[i] === undefined){
            array2[i] = array2[i-1];
        }
        if (array3[i] === undefined){
            array3[i] = array3[i-1];
        }
    }
    for (let i = 0; i <max ; i++) {
        let result = (array1[i]+ array2[i]+ array3[i])/3;
        arraymean.push(result);
    }

    // arraymean = mean(arraymean);
    console.log("medias:",arraymean)
    return arraymean;
}
