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
console.log(person.name)
const ageKey = 'age'
console.log(person.name)
