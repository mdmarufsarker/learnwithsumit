// for(var i=0; i <= 5; i++) {
//     console.log(i);
// }
// 0
// 1
// 2
// 3
// 4
// 5

let i = 1;
for(; ; i++) {
    if(i <= 5) {
        console.log(i);
    }else{
        break;
    }
}
// 1
// 2
// 3
// 4
// 5


// for in

const myObj = {
    name: "JavaScript",
    estd: '1995',
    founder: 'Brendan Eich'
}

for(property in myObj){
    console.log(property)
}
// name
// estd
// founder

const myArr = [1, 2, 3, 4, 5];

for(element in myArr){
    console.log(element);
}
// 0
// 1
// 2
// 3
// 4



// for of

// const myArr = [1, 2, 3, 4, 5];

// for(element of myArr){
//     console.log(element);
// }
// 1
// 2
// 3
// 4
// 5


// const lang = "I love JavaScript"
// for(element of lang){
//     console.log(element);
// }
// I
 
// l
// o
// v
// e
 
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

const lang = "I love JavaScript"
for(element in lang){
    console.log(element);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16