// [1] Function 

// example 1 - Function Declaration         // функция, объявленная в основном потоке кодa

function greet(name) {
    console.log(`Hello - ${name}`)
}

// example 2 - Function Expression          //объявление функции в контексте какого-либо выражения
const greet2 = function greet2(name) {
    console.log(`hello 2 - ${name}`)
} 
greet('Alex')                               // Hello - Alex
greet2('Alex')                              // hello 2 - Alex
console.log(typeof greet)                   // function
console.dir(greet)                          // [Function: greet] 
// dir это способ посмотреть в консоли свойства заданного javascript объекта


// [2] Анонимные функции


//
let counter = 0 
const interval = setInterval(function() {
    if (counter == 5) {
        clearInterval(interval)             // clearTimeout
    } else {
        console.log(++counter)
    }
}, 1000)