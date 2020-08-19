// let a = 24                  // area of visibility

// if(true){
//     let a = 42 
//     console.log(a)          // 42
// }

// console.log('a', a)         // return 24 



// <------- Hoisting 

function hoisted1 () {
    a = 42                      // Как только b была назначена, она заключена в рамки области видимости функции hoisted(). 
    let b = 21                  // Что означает то, что мы не можем вывести её за рамки функции. В отличие от переменной а.
    // return c=a+b
}
hoisted1()
    
    
console.log(c)
// console.log(b)
     