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
