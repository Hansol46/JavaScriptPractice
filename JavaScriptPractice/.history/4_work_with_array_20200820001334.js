// [1] Array


// example 1
const color = ['red', 'white', 'blue', 'green']         
const people = [
    {name: 'Vika', money: 2600},
    {name: 'Alex', money: 1000},
    {name: 'Jakob', money: 5700}
]
// console.log(color)                                  // [ 'red', 'white', 'blue', 'green' ]
// console.log(people[1].name)                         // Alex

// [2] Methods


// example 2
color.push('yellow')
console.log(color)                                     // [ 'red', 'white', 'blue', 'green', 'yellow' ]

color.unshift('black')
console.log(color)                                     // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]

// example 3 
const firstColor = color.shift()                       // удаляем но запоминаем этот элемент массива в переменной 
const lastColor = color.pop()                          // удаляем но запоминаем этот элемент массива в переменной 
console.log(firstColor)                                // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]
console.log(lastColor)                                 // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]
console.log(color)                                     // [ 'red', 'white', 'blue', 'green' ]

// example 4
console.log(color.reverse())                           // [ 'green', 'blue', 'white', 'red' ]

const index = color.indexOf('white')
const index2 = color.indexOf('green')
console.log(index, index2)                            // 2 0, return index element

color[index] = 'pink'                                 // вместо прежнего элемента white мы ставим pink по тому же индексу
console.log(color)                                    // [ 'green', 'blue', 'pink', 'red' ]

// example 5 
let moneyUser 

for (const person of people){                         // new cycle 
    if(person.money === 1000){
        moneyUser = person
    }
}
console.log(moneyUser)                                 // { name: 'Alex', money: 1000 }

// example 6
const index3 = people.findIndex(person=> person.money === 5700)
const person = people.find(person => person.money === 5700)
console.log(person)
