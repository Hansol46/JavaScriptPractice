// [1] Symbol

const symbol = Symbol('demo')
// const symbol2 = Symbol('demo')

// console.log(symbol)                 // Symbol(demo)
// console.log(symbol2)                // Symbol(demo)
// console.log(symbol == symbol2)      // false , в этом суть, символы уникальны
// console.log(symbol === symbol2)     // false 

//
const obj = {
    name: 'Anton',
    [symbol]: 'meta'
}
console.log(obj)                        // { name: 'Anton', [Symbol(demo)]: 'meta' }
console.log(obj[symbol])