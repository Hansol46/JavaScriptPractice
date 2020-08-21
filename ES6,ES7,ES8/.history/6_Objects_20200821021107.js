// [1] Objects
const cityField = 'city'
const job = 'Frontend developer'
const person = {
    // job: job,            //old
    job,                    // если ключ и значения совпадают можно писать просто job
    age: 25,
    [cityField]: 'Moscow',                  // в [] мы можем писать необходимую нам динамику
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
console.log(person)                         // { job: 'Frontend developer', age: 25, city: 'Moscow', name: 'Alex', 'country-live': 'Russia', toString: [Function: toString] }


// [2]Methods
const first = {a: 1}
const second = {b: 2}

// Object.is сравнивает параметры 
console.log(Object.is(20, 10))             // false
console.log(Object.is(20, 20))             // true
console.log(Object.assign({}, first, second, {c: 3, d: 4}))  // { a: 1, b: 2, c: 3, d: 4 }
console.log(first)                         // { a: 1 } при этом first остался таким же

const obj = { a: 1, b: 2, c: 3, d: 4}
console.log(Object.entries(obj))           // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ] , возвращается ассоциативный массив
console.log(Object.keys(obj))              // [ 'a', 'b', 'c', 'd' ] , возвращаются ключи данного объекта 
console.log(Object.values(obj))            // [ 1, 2, 3, 4 ] , возвращаются значения данного объекта 


