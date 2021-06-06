// function myFunc() {
//     console.log(arguments);
// }

// console.log(myFunc(1, 2, 3, 4, 5))
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
// undefined

// function func(...params){
//     console.log(params);
// }

// func(1, 2, 3, 4, 5)
// [ 1, 2, 3, 4, 5 ]


// function func(a, ...params){
//     console.log(params);
//     console.log(a)
// }
// func(1, 2, 3, 4, 5)
// [ 2, 3, 4, 5 ]
// 1


function func(...params, a){
    console.log(params);
    console.log(a)
}
func(1, 2, 3, 4, 5)
// Rest parameter must be last formal parameter