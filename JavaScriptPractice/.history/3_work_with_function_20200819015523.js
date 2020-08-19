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


// example 1
const arrow = (name, age) => {
    console.log(`Hello - ${name} with age ${age}`)
}
const arrow2 = name => console.log(`Hello - ${name}`)
arrow('Max', 21)                // Hello - Max with age 21
arrow2('Vika')                  // Hello - Vika

// example 2
const pow3 = number => number ** 3
console.log(pow3(3))           // 27



// [4] Параметры по умолчанию 

// example 1
const sum = (a = 40, b = a * 2) => a + b 
console.log(sum(12,12))         // 24
console.log(sum())              // 120

// example 2
 function sumAll (...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
 }
 const res = sumAll( 1, 2, 3, 4, 5)
 console.log(res)               // 15 


 // [5] Замыкания 


 // область видимости
 function createMember (name){ 
    return function(lastName) {
        console.log(name + lastName)
    }
 }
 const lofWithLastName = createMember('Maxios')
 console.log(lofWithLastName(' Smith'))
 console.log(lofWithLastName(' Jones'))