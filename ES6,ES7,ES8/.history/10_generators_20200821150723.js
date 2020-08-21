const array = [10, 20, 30,40]
const str = 'Hello'

console.log(array[Symbol.iterator])         // [Function: values]
console.log(str[Symbol.iterator])           // [Function: [Symbol.iterator]]

const iter = array[Symbol.iterator]()
console.log(iter.next())                    // { value: 10, done: false }
console.log(iter.next())                    // { value: 20, done: false }
console.log(iter.next())                    // { value: 30, done: false }
console.log(iter.next())                    // { value: 40, done: false }
console.log(iter.next())                    // { value: undefined, done: true }

