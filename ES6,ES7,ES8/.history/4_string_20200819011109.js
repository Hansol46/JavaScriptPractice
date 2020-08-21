// [1]   String 

// can use 
// ' '
// " "
// ` `                                                                  // new syntax

//example 1 
const title = 'my name Alex'
const newSyntax = `<h1 id='test' style="color: red">${title}</h1>`      // можно использовать ковычки внутри ковычек ` `
                                                 // <h1 id='test' style="color: red">my name Alex</h1>

// example 2 
const title2 = 'Lorem title'
const isVisible = () => Math.random() > 0.7
const newSyntax = `
${isVisible() ? `<p> Visible! </p>`: `...have problem`}
<div> ${title} </div>
`
console.log(newSyntax) 