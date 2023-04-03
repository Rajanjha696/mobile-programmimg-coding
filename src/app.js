const utils= require("./utils");
const data= require("../data")

console.log(utils.dataFormatter(data.awards));
console.log(utils.twoDimensionalArrayGenerator(3,6));
console.log(utils.twoDimensionalArrayIndexSort([ [ 7, 6, 14, 1 ], [ 7, 0, 6, 1 ], [ 8, 5, 15, 2 ] ],1))