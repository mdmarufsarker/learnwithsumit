var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.filter((currentValue, currentIndex, arr) => {
    return currentValue > 4;
})

console.log(result);
console.log(numbers);
// [ 5, 6, 7, 8, 9, 10 ]
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

