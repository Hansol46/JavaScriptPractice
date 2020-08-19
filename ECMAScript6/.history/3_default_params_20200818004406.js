
// <------- example 1

function compute (a = 10, b = 13) {
    return a + b 
}
console.log(compute(11, 1))     //return 12 
console.log(compute())          //return 23

// <------- example 2

const defaultB = 42
function compute (a = 10, b = defaultB) {
    return a + b 
}
console.log(compute(20, 20))     //return 12 
console.log(compute())          //return 23

// const defaultB = 40
// const getDefault = c => c * 2

// function compute (a = 10, b = getDefault(a)) {
//     return a + b 
// }