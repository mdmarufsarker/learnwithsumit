var numbers = [1, 2, 3, 4, 5];

var result = numbers.findIndex((currentValue, currentIndex, arr) => {
    // return !(currentValue % 2);
    return currentValue > 4;
});

console.log(result);