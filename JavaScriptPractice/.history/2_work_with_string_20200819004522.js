
// [1]  String


//
// const name = 'Johnny'
// const age = 19

// function getAge() {
//     return age
// }

// easy syntax
// const output = ' Hello, my name is ' + name + ' my age is ' + age;   // Hello, my name is Johnny and my age is 19
// const output = `Hello, my name is ${name} and my age is ${age}`      // Hello, my name is Johnny and my age is 19
// const output = `
//     <div> This is div </div>
//     <p> This is p </p>
//     `

// 
const name = 'Max '
console.log(name.length)                    // 4, считает пробелы
console.log(name.toUpperCase())             // MAX, возвращает к верхнему регистру
console.log(name.toLowerCase())             // max, возвращает к нижнему регистру 
console.log(name.charAt(2))                 // x, врзвращает символ по номеру 

console.log(name.indexOf('!'))              // -1,возвращает первый индекс или -1 если такого нет
console.log(name.indexOf('a'))              // 1, возвращает первый индекс

console.log(name.startsWith('Ma'))          // true, определяет, начинается ли строка с введенной строки
console.log(name.startsWith('ax'))          // false

console.log(name.endsWith('ax'))            // false, определяет, заканчивается ли строка с введенной строки
console.log(name.endsWith('x '))            // true
console.log(name.repeat(3))