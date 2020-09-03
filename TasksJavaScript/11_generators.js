// generators последовательно выполняют какое-то дейтсвие
function* strGenerator(){
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'   
}
const str = strGenerator()
console.log(str)
console.log(str.next())   // { value: 'H', done: false }
console.log(str.next())   // { value: 'e', done: false }
console.log(str.next())   // { value: 'l', done: false }
console.log(str.next())   // { value: 'l', done: false }
console.log(str.next())   // { value: 'o', done: false }
console.log(str.next())   // { value: undefined, done: true } значит дейтсвие закончилось

// example 2 
function* numberGen( n= 10 ){
    for(let i=0; i < n; i++){
        yield i;
    }
}
const num = numberGen(7)
console.log(num.next()) // начиная с 0 числа будут идти по порядку
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next()) // на 7 итерации цикт выдаст undefined 

// example 3
// мы можем написать логику генераторов самостоятельно 
const iterator = {
    gen(n = 10){
        let i = 0
        return {
            next(){
                if( i < n ){
                    return { value: ++i, done: false}
                } 
                return {value: undefined, done: true}
            }
        }
    }
}
const itr = iterator.gen(4)
console.log(itr.next())     // 1
console.log(itr.next())     // 2
console.log(itr.next())     // 3
console.log(itr.next())     // 4
console.log(itr.next())     // undefined

// example 4 
// cycle for of
for (let k of 'Hello'){
    console.log(k)          // результатом будет вывод посимвольно этой строчки
}
const animal = {
    first: 'Lion',
    second: 'Cat',
    third: 'Mouse',
    fourth: 'Bird'
}
// цикл for of может работать и с массивами
for ( let key of [1,1,2,3,5,8,13]){
    console.log(key)        //в консоли получим все числа массива 
}
// цикл for in можем применять к объектам
for (let key in animal){
    console.log(animal[key])   // в консоли получим название всех животных
}

// example 5
// мы можем использоваит цикл в комплекте с генератором для получения значений
function* iter (n=10){
    for (let i = 0; i < n; i++){
        yield i
    }
}
for(let key of iter(8)){
    console.log(key)        // в консоль мы получаем число от 0 до 7
}




