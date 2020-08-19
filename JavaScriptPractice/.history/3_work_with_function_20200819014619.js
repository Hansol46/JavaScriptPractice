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


// анонимные функции - это функции которые объявляются в месте использования и больше нигде не применяются
let counter = 0 
const interval = setInterval(function() {
    if (counter == 5) {
        clearInterval(interval)             // clearTimeout
    } else {
        console.log(++counter)
    }
}, 1000)


// [3] Arrow function 


//
function greet(){
    console.log(`Hello - `)
}

const arrow = (name, age) => {
    console.log(`Hello - ${name} with age ${age}`)
}
const arrow2 = name => console.log(`Hello - ${name}`)

console.log(greet())
arrow('Max', 21)
arrow2('Vika')