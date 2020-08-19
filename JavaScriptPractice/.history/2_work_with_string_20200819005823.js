
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

// example methods 1
// const name = 'Max '
// console.log(name.length)                    // 4, считает пробелы
// console.log(name.toUpperCase())             // MAX, возвращает к верхнему регистру
// console.log(name.toLowerCase())             // max, возвращает к нижнему регистру 
// console.log(name.charAt(2))                 // x, врзвращает символ по номеру 

// console.log(name.indexOf('!'))              // -1,возвращает первый индекс или -1 если такого нет
// console.log(name.indexOf('a'))              // 1, возвращает первый индекс

// console.log(name.startsWith('Ma'))          // true, определяет, начинается ли строка с введенной строки
// console.log(name.startsWith('ax'))          // false

// console.log(name.endsWith('ax'))            // false, определяет, заканчивается ли строка с введенной строки
// console.log(name.endsWith('x '))            // true
// console.log(name.repeat(3))                 // Max Max Max

// // example methods 2
// const string = '    hello   '
// console.log(string)                         //     hello    , вернет слово с пробелами 
// console.log(string.trim())                  // hello, вернет слово без пробелов
// console.log(string.trimLeft())              // hello    , вернет слово без пробелов слева
// console.log(string.trimRight())             //      hello, вернет слово без пробелов справа

// example 3
function logPerson(string, name, age){
    if(age < 0) {
        age = 'Еще не родился'
    }
    return `${string[0]}${name}${string[1]}${age}${string[2]}`      // удобное использование 
}
const personName = 'Anny'
const personName2 = 'Alla'
const personAge = 26
const personAge2 = -30


const output = logPerson`Name: ${personName}, age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, age: ${personAge2}!`
console.log(output)                         // Name: Anny, age: 26!
console.log(output2)                        // Name: Alla, age: Еще не родился!

const name = 'Herp'
const age = 102
const output3 = logPerson`Имя человека: ${name}, ego vozrast - ${age}, takie dela`
console.log(output3)  
