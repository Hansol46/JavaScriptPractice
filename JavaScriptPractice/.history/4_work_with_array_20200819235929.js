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


//
color.push('yellow')
console.log(color)                                     // [ 'red', 'white', 'blue', 'green', 'yellow' ]

color.unshift('black')
console.log(color)                                     // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]

//  
const firstColor = color.shift()    
const lastColor = color.pop()
console.log(firstColor)                                // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]
console.log(lastColor)                                 // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]
console.log(color)                                     // [ 'black', 'red', 'white', 'blue', 'green', 'yellow' ]