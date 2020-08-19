// let a = 24                  // area of visibility

// if(true){
//     let a = 42 
//     console.log(a)          // 42
// }

// console.log('a', a)         // return 24 



// <------- Hoisting 

// b = 20 

// console.log(b)

// let b = 10 

function hoisted () {
    a = 42
    let b = 21
}
// let age
hoisted()
console.log(a)
console.log(b)
     