// work with Array
const people = [
    {name: 'Max', age: 21, budget:2800},
    {name: 'Alex', age: 30, budget:900},
    {name: 'Vika', age: 17, budget:6900},
    {name: 'Joji', age: 47, budget:3100},
    {name: 'Sasha', age: 50, budget:4300},
    {name: 'Nik', age: 19, budget:300},
]
// чтобы проитерировать используем циклы
for ( let i = 0; i < people.length; i++){
    console.log(people[i])  // в консоль получаем все объекты массива people
}
// цикл for of удобнее в плане перебора 
for ( let key of people){
    console.log(key)        // цикл сработает так как же как цикл в примере выше
}

// Methods 
// [1] ForEach
// мы делаем интерацию для каждого элемента, результат будет как в примерах выше
people.forEach( person => console.log(person))  // выведет все объеты массива people 

//[2] Map
// map - создает новый массив, трансформируя и изменяя старый 
const newPeople = people.map( person => {
    return person.name + ', Hello'
    // получим новый массив где в каждому имени прибавлена запись Hello
})
console.log(newPeople)

//[3] Filter 
// данный метод позволяет отильтровать какие-то данные
const budgetPeople = people.filter( person => 
    person.budget > 3000)
console.log(budgetPeople)   // в консоль мы получим только 3х пользователей, чей бюджет больше 3000

// [4] Reduce
// с помощью этого метода мы получаем финальное значение
// например просумировать бюджет, можно использовать цикл, например:
let amount = 0
for( let i =0;i<people.length;i++){
    amount += people[i].budget
}
console.log(amount)          // 18300
// теперь реализуем подобную логику с помощью reduce
const amount2 = people.reduce((total, person)=> total + person.budget, 0)   // 0 начальное значение 
console.log(amount2)        // 18300

// [5] Find
// служит для поиска какого то элемента
// к примеру мы хотим найти человека у которого имя Alex
const nameAlex = people.find(person => person.name === 'Alex')
console.log(nameAlex)       // получим только один объкт, у которого имя Alex

// [6] FindIndex
// работает так же, но на выходе мы получаем индекс
const indexAlex = people.findIndex( person => person.name === 'Alex')
console.log(indexAlex)      // 1, потому что в нашем массиве Алекс на втором месте 

// Tasks

const amount3 = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} ${person.age}`,
            budget: person.budget
        }
    })
    .reduce((sum, person) => sum + person.budget, 0)
    // такая запись называется чейн(цепочка)
console.log(amount3)      // 14300