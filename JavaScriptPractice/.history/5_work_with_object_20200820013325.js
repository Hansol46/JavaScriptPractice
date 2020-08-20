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
    if(person.hasOwnProperty(key)){                     // возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
        console.log('key', key)
        console.log('value', person[key])
    }
}

// [2] Context 


//
const logger = {
    keys(){
        console.log('Object key: ', Object.key(this))
    },

    keysAndValues() {
    Object.keys(this).forEach(function(key) {
        console.log(`"${key}": ${this[key]}`)
    }.bind(this))
    },

    withParams(top=false, between = false, bottom= false) {
        if(top){
            console.log('-------Start-------')
        }
        Object.keys(this).forEach((key,index,array)=> {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------')
            }
        })
        if(bottom){
            console.log('-------End-------')
        }
    }

}
const bound = logger.keys.bind(person)
bound()