var numbers = [1, 2, 3, 4, 5];

var result = numbers.splice(1, 2, 10, 11, 12, 13);

console.log(numbers); // [ 1, 10, 11, 12, 13, 4, 5 ]
console.log(result); // [ 2, 3 ]

// note : main arr k change kore fele

var num = [1, 2, 3, 4, 5];
var res = num.splice(-1, 2, 10, 11, 12, 13);

console.log(res); // [ 5 ]
console.log(num); // [ 1, 2, 3, 4, 10, 11, 12, 13 ]


// 1st digit means kotha theke suru hobe
// 2nd digit means koyta bad dibe
// 3rd - n digit means ki ki add korbe