// [1] Rest

// example 1
function average(arr) {
    return arr.reduce( (acc, i) => acc += i, 0) / arr.length
}

console.log(average([10, 20, 30, 40]))                          // 25

// example 1
function average2(...arr) {
    return arr.reduce( (acc, i) => acc += i, 0) / arr.length
}
console.log(average2(10, 20, 30, 40, 50))                       // 30


// [2] Spread

// Этот оператор позволяет развернуть массив
const arr = [1, 2, 3, 5, 8, 13]
console.log(arr)                                                // [1, 2, 3, 5, 8, 13]
console.log(...arr)                                             // 1 2 3 5 8 13    разворачивает массив
console.log(Math.max(arr))                                      // NaN  к вопросу где может применяться оператор spread
console.log(Math.max(...arr))                                   // 13  (теперь все работает)
// ранее использовался следующий метод 
console.log(Math.max.apply(null, arr))                          // 13
// create new array
const fib = [1, ...arr]
console.log(fib)                                                // [1, 1, 2, 3, 5, 8, 13]


// [3] Destructuring 

// old method
const testArr = [20, 10, 30, 80]
// const a = testArr[0]
// const b = testArr[1]
// console.log(a, b)                                            // 20 10
//new method 
// const [a, b] = testArr
// console.log(a, b)                                            // 20 10
// example 1 
// const [a, b, ...c] = testArr
// console.log(a, b, c)                                         // 20 10 [ 30, 80 ]
// example 2
// const [a, , c] = testArr
// console.log(a, c)                                            // 20 30


// [4] work spread with Object

// example 2
const address = {
    country: 'Russia',
    city: 'Moscow',
    // street: 'Lenina',
    concat() {
        return `${this.country}, ${this.city}, ${this.street}`
    }
}
// console.log(address.concat())                                  // Russia, Moscow, Lenina
// const {city: addressCity, country, street = 'Tverskay', concat: addressConcat} = address   // можно ставить значение по умолчанию
// console.log(country)                                              // Russia
// console.log(addressConcat.call(address))                          // Russia, Moscow, Lenina
// console.log(addressCity)                                          // Moscow
// console.log(street)                                               // Tverskay

// example 2
const {city, ...rest} = address
console.log(city)
console.log(rest)