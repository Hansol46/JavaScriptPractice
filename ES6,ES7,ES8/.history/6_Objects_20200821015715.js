const cityField = 'city'
const person = {
    age: 25,
    [cityField]: 'Moscow',
    name: 'Alex',
    'country-live': 'Russia',               // ключ можно использовать как строчку для реализации опредленных символов
    toString() {
        return Object.keys(this)            // this new method return array
            .filter(key => key !== 'toString')
                .map(key => this[key])
                    .join(' ')
    }

}
console.log(person.toString())              // 25 Alex Russia
console.log(person)                         // { age: 25, city: 'Moscow', name: 'Alex', 'country-live': 'Russia', toString: [Function: toString] }
