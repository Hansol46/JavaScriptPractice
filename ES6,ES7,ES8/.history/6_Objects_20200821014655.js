const person = {
    age: 25,
    name: 'Alex',
    'country-live': 'Russia',            // ключ можно использовать как строчку для реализации опредленных символов
    toString() {
        return Object.keys(this)            // return array
            .map(key => this[key])
                
    }

}
console.log(person.toString())