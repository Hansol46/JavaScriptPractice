
//   [1] Syntax arrow function 


// <------- example 1

// function sum(a,b){
//     return a + b 
// }
// function cube(a) {
//     return a ** 3
// }
// console.log(sum(1,11))           // return 12
// console.log(cube(3))             // return 27

// const sum = (a, b) => a + b      // easy syntax
// const cube = a => a ** 3         // if 1 parameter, brackets you can not bet 

// console.log(sum(1,11))           // return 12
// console.log(cube(3))             // return 27

// <------- example 2

// setTimeout( () => console.log('After 1 sec'), 1000)


//      [2] Context 

function log() {
    console.log(log)
}

