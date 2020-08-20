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
console.log(person)                                     // { name: 'Alex', age: 22, isMan: true }
    
// example 3
const name = person.name
const age = person.age
const languages = person.languages  
console.log(age, name)                                  // 22 Alex

const  person11 ={name, age: personAge=10, languages} 
console.log(person11)                                   // { name: 'Alex', age: 10, languages: undefined }

// example 3
for (let key in person){
    if(person.hasOwnProperty(key)){
        console.log('key', key)
        console.log('value', person[key])
    }
}