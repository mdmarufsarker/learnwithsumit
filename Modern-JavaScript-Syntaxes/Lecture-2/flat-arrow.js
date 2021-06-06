// function number(){
//     return 10;
// }
// console.log(number())


// let number = () => 10;

// console.log(number());



// using perameter
// let number = (a, b) => a + b;

// console.log(number(10, 5));


// js object
// var javascript = {
//     name: 'JavaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//        // console.log(this);
//         var lib = this;
//         this.libraries.forEach(function (n){
//             console.log(`${lib.name} loves ${n}`);
//         });
//     }
// };

// javascript.printLibraries();



// var javascript = {
//     name: 'JavaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//         // console.log(this);
//         this.libraries.forEach((n) => 
//             console.log(`${this.name} loves ${n}`));
//     },
// };

// JavaScript loves React
// JavaScript loves Angular
// JavaScript loves Vue


// new keyword
function Person(name){
    this.name = name;
}

var sakib = new Person('Sakib');
// no error

var Person = (name) => {
    this.name = name;
}

var sakib = new Person('Sakib');
// return error