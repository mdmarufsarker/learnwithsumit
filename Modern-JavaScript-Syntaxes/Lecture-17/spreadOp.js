var numbers = [1, 2, 3];
// var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5, 6];

// console.log(newNumbers)
// [ 1, 2, 3, 4, 5, 6 ]

var newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers)
// [ 1, 2, 3, 4, 5, 6 ]



console.log("Next")

var a = [1, 2, 3, 4, 5]
var b = a;
a.push(10)
console.log(a) // [ 1, 2, 3, 4, 5, 10 ]
console.log(b) // [ 1, 2, 3, 4, 5, 10 ]

var c = [1, 2, 3, 4, 5]
var d = [...c]

c.push(15)
console.log(c) // [ 1, 2, 3, 4, 5, 15 ]
console.log(d) // [ 1, 2, 3, 4, 5 ]


var num1 = [1, 2, 3, 4, 5]
var num2 = [6, 7, 8, 9, 10]
var num = [...num1, ...num2]
console.log(num) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// For object

var obj1 = {
    x: 1,
    y: 2
}
var obj2 = {
    a: 3,
    b: 4
}

var obj = {...obj1, ...obj2}
console.log(obj)
// { x: 1, y: 2, a: 3, b: 4 }