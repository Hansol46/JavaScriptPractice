// [1]   String 

// can use 
// ' '
// " "
// ` `                                                                  // new syntax

//example 1 
const title = 'my name Alex'
const newSyntax = `<h1 id='test' style="color: red">${title}</h1>`      // можно использовать ковычки внутри ковычек ` `
console.log(newSyntax)                                                  // <h1 id='test' style="color: red">my name Alex</h1>

// example 2 
const title2 = 'Lorem title'
const isVisible = () => Math.random() > 0.7
const newSyntax2 = `
${isVisible() ? `<p> Visible! </p>`: `...have problem`}                
<div> ${title2} </div>
`
console.log(newSyntax2)                                                // <p> Visible! </p> <div> Lorem title </div>        



// [2] Methods

//
const stringMethod = 'Hello'
console.log(stringMethod.startsWith('He'))                             // true, проверяет начинается ли строка с введенной нами строки
console.log(stringMethod.startsWith('el'))                             // false 

console.log(stringMethod.endsWith('lo'))                               // true, проверяет заканчивается ли строка с введенной нами строки
console.log(stringMethod.endsWith('ll'))                               // false 

console.log(stringMethod.includes('ello'))                             // true, проверяет существует ли введнная нами строка 
console.log(stringMethod.repeat(4))                                    // HelloHelloHelloHello, дублируем строчку

console.log(stringMethod.trim())                                       // удаляет все пробелы
console.log(stringMethod.trimLeft())                                   // удаляет все пробелы слева
console.log(stringMethod.trimRight())                                  // удаляет все пробелы справа

console.log(stringMethod.padStart(10))                                 //      Hello, задает строке минимально значение длинны (получаем дополнительные пробелы)
console.log(stringMethod.padStart(10, 1234))                           // 12341Hello, вторым параметром передаем способ наполнения
console.log(stringMethod.padEnd(8))                                  // удаляет все пробелы справа
console.log(stringMethod.padEnd(8, OOy))                                  // удаляет все пробелы справа




