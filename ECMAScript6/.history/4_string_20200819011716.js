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
console.log(stringMethod.startsWith('He'))                             // true, проверяет начинается ли строчка с введенной нами строчки
console.log(stringMethod.startsWith('el'))                             // false 
console.log(stringMethod.endsWith('lo'))                               // true, проверяет заканчивается ли строчка с введенной нами строчки
console.log(stringMethod.endsWith('ll'))                               // false 
сonsole.log(stringMethod.includes('ello'))

