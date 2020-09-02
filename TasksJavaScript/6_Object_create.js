//Гибкая настройка объекта 
// property descriptor
const person = Object.create(
    // первый параметр, это прототип нового объета person
    // можем создать там какой нибудь метод(можем не задавать ничего)
    {
        calculate(){
            return console.log('Age:', this.age)
        }
    },{
    name: {
        value: 'Yury',
        // чтобы можно было перебрать наш объект нужно указать значение enumerable как true
        enumerable: true,             
        // чтобы присвоить новое значение нужно поменять на значение true - writable
        writable: true,
        // чтобы удалить ключ из объекта, ставим configurable в значение true
        configurable: true
    },
    age: {
        value: 22,
        enumerable: true,
        writable: true,
        configurable: false
    },
    
     
    birthYear: {
        // getter должен вернуть какое-то значение
        get(){
            return new Date().getFullYear() - this.age
        },
        // setter принимает некоторый value
        set(value) {
            // в setters мы можем делать любые манипуляции 
            document.body.style.background = 'red'
            return console.log('Set value:', value)
        }
    }
})
console.log(person)

console.log(person.birthYear)       // 1998
console.log(person.age = 2232323)   // 2232323
person.age = 29                     // success return 29
delete person.name                  // success return only age


// цикл бежим и по прототипу 
for(let key in person) {
    // чтобы не пробегаться по прототипу, можно добавить проверку
    if(person.hasOwnProperty(key)){
    console.log('key',key, person[key])
        
    }
    
}

//getter setter
