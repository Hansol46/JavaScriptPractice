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
// hoisted()
    // Как только b была назначена, она заключена в рамки области видимости функции hoisted(). 
    // Что означает то, что мы не можем вывести её за рамки функции. В отличие от переменной а.
console.log(a)
// console.log(b)
     