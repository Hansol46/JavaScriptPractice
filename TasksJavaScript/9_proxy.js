// Objects
const person = {
    name: 'Jerax',
    age: 24,
    job: 'Frontend'
}
// proxy первым парамером принимает target
const op = new Proxy(person,{
    
    get(target, prop){
        console.log(`Getting prop: ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        if(prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in taget`)
        }
    },
    has(target, prop){
        // можем проверять есть ли поле prop в нашем массиве
        // так мы можем совершать разного рода валидацию
        return ['name', 'age', 'job'].includes(prop)
    },
    deleteProperty(target,prop){
        console.log(`Deleting ... ${prop}`)
        delete target[prop]
        return true
    }
})
console.log(op.name)   // Jerax
console.log(op.age)    // 24
op.age = 26 
console.log(op.age)
console.log(op)
console.log(delete op.age)
console.log(op)        // поле age было успешно удалено

// Function 
const log = text => `Log: ${text}`
console.log(log('fdfdfdfdf'))

const functionProxy = new Proxy(log, {
    // первый параметр это target
    // второй параметр, это набор handlers
    apply(target, thisArg, args){
        // метод apply, принимает функцию с которой мы работает
        // thisArg - контекст, если мы его передавали, например с помощью call или bind
        // args это все параметры, которые к нам приходят в нашем случае это параметр text
        console.log('Calling functionProxy')
        // удобнее использовать имено apply, потому что вторым параметром мы принимаем массив данных
        return target.apply(thisArg, args).toUpperCase()

    }
})
console.log(functionProxy('Hello, guys'))

//Classes
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Connect...')
        return new target(...args)
    }
})
const p = new PersonProxy('Alex', 33)
console.log(p)

// Task 1
const animals = {
    name: "Lion",
    age: 20,
    hasTail: true
}
const animalProxy = new Proxy(animals, {
    get(target, prop){
        if(!(prop in target)){
            return prop.split('_')
            .map(p => target[p])
            .join(' ')
        }
        return target[prop]
    }
})
console.log(animals)
console.log(animals.name)
console.log(animals.name_hasTail_age)
