// [1] This

// this - всегда указывает на тот объект в контексте которого оно выбло вызвано 

// example 1
function hello() {
    return console.log('hello, guys', this)
}
console.log(hello())        // hello, guys Object [global] {params}
// тут this указывает на глобальный объект window

// example 2
const person = {
    name: 'Yury',
    age: 22,
    sayHello: hello
}
console.log(person.sayHello()) // hello, guys { name: 'Yury', age: 22, sayHello: [Function: hello] }
// здесь this указывает на объект person 


// [2] Bind
// если мы хотим в функции обратиться к глобальному объекту window, то используем bind
const person2 = {
    sayHelloWindow: hello.bind(this),
}
console.log(person2.sayHelloWindow()) // hello, guys {}

// example 1
const persson3 = {
    name: 'Vika',
    age: 18,
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Job is ${job}`)
        console.log(`Name person is ${this.name}`) 
        console.log(`Age person is ${this.age}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
console.log(persson3.logInfo())

//example 2
//если мы хотим использовать другой объект и с методом logInfo объекта persson3 мы сможем это сделать через bind
const Misha = {
    name: 'Misha',
    age: 21
}
console.log(persson3.logInfo.bind(Misha)()) // name person is Misha, age person is 21
const mishaInfo = persson3.logInfo.bind(Misha)
console.log(mishaInfo('Frontend', '+7 922 999 99 99'))

// [2] call 
// вместо bind мы можем использовать метод call
// отличие лишь в том, что call вызывается сразу 

console.log(persson3.logInfo.call(Misha, 'new job', 'dont use phone'))

// [3] apply
// этот метод, отличается от call и bind тем
// что в него вторым параметром всегда передается массив

console.log(persson3.logInfo.apply(Misha, ['new job', 'dont use phone']))


// practice
const array = [1, 2, 3, 4, 5]
function arrayUp(arr, number){
    return arr.map( i => i * number)
}
console.log(arrayUp(array, 3))          // [ 3, 6, 9, 12, 15 ]
// мы можем использовать proto и this, чтобы написать такую же функцию
Array.prototype.arrayUp2 = function (number) {
    return this.map( i => i * number)
}
console.log(array.arrayUp2(4))          // [ 4, 8, 12, 16, 20 ]
// теперь мы можем применять нашу функцию arrayUp к любому массиву
console.log([13, 12, 20].arrayUp2(2))   // [ 26, 24, 40 ]