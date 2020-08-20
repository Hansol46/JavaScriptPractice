// [1] Object 


// example 1
const person = {
    name: 'Alex',
    age: 21,
    isMan: true,
    languages: ['en', 'ru', 'uk'],
    greet() {
        console.log(`Hi, ${this.name}`)
    }
}
console.log(person.greet())                             // Hi, Alex

// example 2
console.log(person.name)                                // Alex
const ageKey = 'age'
console.log(person[ageKey])                             // 21

person.age++
console.log(person.age)                                 // 22
person.languages.push('by')
console.log(person.languages)                           // [ 'en', 'ru', 'uk', 'by' ]

delete person['greet']                                  // delete function greet
console.log(person)                                     // {name: 'Alex',age: 22,isMan: true, languages: [ 'en', 'ru', 'uk', 'by' ]}
delete person['languages']
console.log(person)                                     // {name: 'Alex',age: 22,isMan: true, languages: [ 'en', 'ru', 'uk', 'by' ]}
