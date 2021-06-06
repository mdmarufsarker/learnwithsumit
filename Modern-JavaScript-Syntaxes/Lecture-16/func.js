function myFunc(x = 10){
    return x;
}

console.log(myFunc()) //10 --> default value
console.log(myFunc(null)) // null --> null ekta value
console.log(myFunc(undefined)) // 10 --> kono value na