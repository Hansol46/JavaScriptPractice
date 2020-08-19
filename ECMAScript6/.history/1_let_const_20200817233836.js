// let a = 24                  // area of visibility

// if(true){
//     let a = 42 
//     console.log(a)          // 42
// }

// console.log('a', a)         // return 24 



// <------- Hoisting 


// example 1
// function hoisted1 () {
//     a = 42                      // Как только b была назначена, она заключена в рамки области видимости функции hoisted(). 
//     let b = 21                  // Что означает то, что мы не можем вывести её за рамки функции. В отличие от переменной а.
//     // return c=a+b
// }
// hoisted1()
//console.log(a)
// console.log(b)
    
function hoisted2 () {
    a= 10
    let b = 11
    return c = a + b
}
console.log(c)