var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce((previousValue, currentValue, currentIndex, arr) => {
    return previousValue + currentValue;
}, 0);

console.log(sum); // 15