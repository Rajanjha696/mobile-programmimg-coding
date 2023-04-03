const data = require('../data')

let twoDimensionalArrayGenerator = (rows, columns) => {
    let twoDimensionalArray = [];
    for (let i = 0; i < rows; i++) {
        twoDimensionalArray.push([]);
        for (let j = 0; j < columns; j++) {
            twoDimensionalArray[i].push(Math.floor(Math.random() * 10));
        }
    }
    return twoDimensionalArray;
}

let twoDimensionalArrayIndexSort = (arr, index) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][index] > arr[j][index]) {
                let holder = arr[i][index];
                arr[i][index] = arr[j][index];
                arr[j][index] = holder;
            }
        }
    }
    return arr;
}

let dataFormatter = (data) => {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        let isInsert = checkResult(result, data[i].category, data[i].year);
        if (isInsert.result) {
            result[isInsert.index].winners.push({
                name: data[i].name,
                share: data[i].shares
            })
            console.log( result[isInsert.index].winners)
        } else {
            let newObj = {
                category: data[i].category,
                year: data[i].year,
                winners: [{
                    name: data[i].name,
                    share: data[i].share
                }
                ]
            }
            result.push(newObj);
        }
    }
    return result;
}

let checkResult = (data, category, year) => {
    for (let i = 0; i < data.length; i++) {
        if ((data[i].category == category && data[i].year === year)) {

            return { index: i, result: true }
        }
    }
    return { index: -1, result: false }
}

module.exports = {
    twoDimensionalArrayGenerator,
    twoDimensionalArrayIndexSort,
    dataFormatter
}

