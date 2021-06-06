var numbers = [1, 2, 3, 4, 5];

// var result = numbers.push(6, 7, 8, 9, 10);

// console.log(result);
// console.log(numbers);
// 10
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

var result = numbers.push([6, 7, 8, 9, 10]);
console.log(numbers);
// [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

// note : main array k change kore.