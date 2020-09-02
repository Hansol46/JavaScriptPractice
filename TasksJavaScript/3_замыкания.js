// [1] Loop
// замыкание это функция внутри функции 
function createCulcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}
console.log(createCulcFunction(4))      // [function]
// чтобы все заработало надо использовать следующий синтаксис
let calc = createCulcFunction(4)
console.log(calc())                     // 4000 


//  example 2
function createInc(n) {
    return function (num) {
        return n+num
    }
}
let addOne = createInc(1)
console.log(addOne(10))                 // 11

let addTen = createInc(10)
console.log(addTen(10))                 // 20

//  example 3  
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const addUrl = urlGenerator(`com`)
console.log(addUrl(`google`))           // https://google.com
console.log(addUrl(`yandex`))           // https://yandex.com


// Task
function logPerson () {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {
    name: 'Alex',
    age: 22,
    job: 'Frontend'
}
const person2 = {
    name: 'Vika',
    age: 19,
    job: 'SMM'
}
function getBind(person) {
    return per = logPerson.bind(person)()
}
console.log(getBind(person1))
console.log(getBind(person2))

function bind(person, func) {
    return function(...arg) {
        return func.call(person, arg)
    }
}
console.log(bind(person1, logPerson)())
console.log(bind(person2, logPerson)())
