var numbers = [1, 2, 3, 4, 5];

var result = numbers.find(function(currentValue, currentIndex, arr) {
    return currentValue > 4;
});

console.log(result);
console.log(numbers);

// class Student{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     test(){
//         console.log("Hello");
//     }
//     exampleFunction(){
//         let arr = [1, 2, 3, 4, 5];
//         arr.find(function(currentValue, currentIndex, arr) {
//             this.test();
//         }, this);
//     }
// }
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    test(){
        console.log("Hello");
    }
    exampleFunction(){
        let arr = [1, 2, 3, 4, 5];
        arr.find(() => {
            this.test();
        });
    }
}

let student = new Student("Maruf", 21);
student.exampleFunction();