const array = [10, 20, 30,40]
const str = 'Hello'

console.log(array[Symbol.iterator])         // [Function: values]
console.log(str[Symbol.iterator])           // [Function: [Symbol.iterator]]

const iter = array[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

