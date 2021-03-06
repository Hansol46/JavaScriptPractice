const person = {
    age: 25,
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