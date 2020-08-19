
//   [1] Syntax arrow function 


// <------- example 1

// function sum(a,b){
//     return a + b 
// }
// function cube(a) {
//     return a ** 3
// }
// console.log(sum(1,11))           // return 12
// console.log(cube(3))             // return 27

// const sum = (a, b) => a + b      // easy syntax
// const cube = a => a ** 3         // if 1 parameter, brackets you can not bet 

// console.log(sum(1,11))           // return 12
// console.log(cube(3))             // return 27

// <------- example 2

// setTimeout( () => console.log('After 1 sec'), 1000)


//      [2] Context(this)

function log() {
    console.log(this)       // this указывает на эту же функцию в контексте которой она была вызвана
}
const arrowLog = () => console.log(this) // this всегда указывает на контекст который стоит выше (потому что у стрелочной функции нет своего контекста)

const user = {
    age: 20,
    name: 'Victor',
    log: log,
    arrowLog: arrowLog,
    delayLog: function(){                           // delayLog определена как функция и контекст указывает на user.
        setTimeout(function(){                      // еще одна функция, в ней this указывает на тот объект в контексте которого это было вызвано 
            console.log(this.name + ' ' + this.age) // чтобы все работало, нужно перераспределить контекст: const context = this. и использовать в console.log context
        }, 1000)
    },
    delayArrowLog: function() {
        setTimeout ( () => {                        // в это примере стрелочная функция не создает своего контекста
            console.log(this.name + ' ' + this.age) // поэтому this указывает уже на объект person 
        },1000)
    }
}
user.delayLog()              // return undefined undefined 
user.delayArrowLog()        // return Victor 20

// user.log()               // return сам объект в контексте которого это все было вызвано
// user.arrowLog()          // return глобальный объект  {} который называется global, если в браузере то window