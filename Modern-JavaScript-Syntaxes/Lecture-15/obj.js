var obj = {
    name: "JavaScript",
    founder: "Brendan Eich",
    estd: "1995",
    ranking: 1
};

var keys = Object.keys(obj)
console.log(keys);
// [ 'name', 'founder', 'estd', 'ranking' ]
var values = Object.values(obj)
console.log(values);
// [ 'JavaScript', 'Brendan Eich', '1995', 1 ]

console.log(Object.entries(obj))
// [ [ 'name', 'JavaScript' ],
//   [ 'founder', 'Brendan Eich' ],
//   [ 'estd', '1995' ],
//   [ 'ranking', 1 ] ]


// var x = 5;
// var y = 5;
// var z = x + y;
// var sum = {
//     x: x,
//     y: y,
//     z: z
// }
// [ [ 'x', 5 ], [ 'y', 5 ], [ 'z', 10 ] ]

// Shortcut
var x = 5;
var y = 5;
var z = x + y;
var sum = {
    x,
    y,
    z
}
console.log(Object.entries(sum))
// [ [ 'x', 5 ], [ 'y', 5 ], [ 'z', 10 ] ]
