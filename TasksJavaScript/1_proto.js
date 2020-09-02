// [1] __proto__

// __proto__ это специальный объект, у объктов котороый вызывается сверху вниз и хранит в себе различные функции и методы
// а так же имеет свои методы

// example 1
const person = {
    name: 'Alex',
    age: 29,
    greet(){
        console.log('greet!!')
    }
}
console.log(person.greet()) // greet!!

// example 2
// мы можем создать объект другим способом, и тут мы видим, что наш person2 наследуется от класса Object
const person2 = new Object({
    name: 'Alex',
    age: 29,
    greet(){
        console.log('greet!!')
    }
})
console.log(person2.greet()) // greet!!
// console.log(person2.sayHelo()) // error, так как такоего метода нет


Object.prototype.sayHello = function() {
    console.log('hello!!!!!!!!!!')
}
// если мы прописываем новый метод у класса глобально, то наш person2 сможет обратиться к нему
console.log(person2.sayHello()) // hello!!!!!!!!!!


const user = Object.create(person2)
console.log(user)           // {} - получаем пустой объект 
console.log(user.greet())   // но т.к он наследуется из класса person2, то у него есть все же свойства
user.name = 'Masha'
console.log(user.name)

