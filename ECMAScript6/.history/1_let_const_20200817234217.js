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
//console.log(a)                   // return 42
// console.log(b)                  // return *Error
    
function hoisted2 () {
    a= 10
    let b = 11                       
    let c                          // Но если мы объявим переменную через let, а потом воспользуемся console.log, то вернем *Error
    return c = a + b               // Если мы возвращаем значение с и выводим в console.log, то ошибки не будет

}
hoisted2()
console.log(c)                    // if let c => return *Error,    if c => return 21