// [1] Symbol

const symbol = Symbol('demo')
// const symbol2 = Symbol('demo')

// console.log(symbol)                 // Symbol(demo)
// console.log(symbol2)                // Symbol(demo)
// console.log(symbol == symbol2)      // false , в этом суть, символы уникальны
// console.log(symbol === symbol2)     // false 

// example
const obj = {
    name: 'Anton',
    [symbol]: 'meta'
}
console.log(obj)                        // { name: 'Anton', [Symbol(demo)]: 'meta' }
console.log(obj[symbol])                // meta

for (let key in obj) {                  // cycle don't see symbols
    return console.log(key)             // name
}