// Wrapper 
const withDefaultValue = (target, defaultValue =2) => {
    return new Proxy(target, {
        get: (obj, prop) => {
            return (prop in obj ? obj[prop] : defaultValue)
        }
    })
}
const position = withDefaultValue ({
    x: 24,
    y: 42
},
0
)
console.log(position)   // { x: 24, y: 42 }
console.log(position.x) // 24 
console.log(position.z) // 0, мы обратись к несуществующей переменной
// и получили не ошибку а 0, потому что мы задаем defaultValue


// Hidden properies
// example 2
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        //  нам необходимо чтобы мы не получали доступ 
        //  к объектам  с нижним префиксом _
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        // еще одно свойство в proxy, которое говорит какие ключи 
        // находятся у объекта
        ownKeys: obj => Reflect.ownKeys(obj)
            .filter( prop => !prop.startWith(prefix)),
        get: (obj, prop, receiver) => ( prop in receiver) ? obj[prop]
            : undefined
    })
}
const data = withHiddenProps({
    name: 'Yury',
    age: 13,
    // поля с _ должны быть скрыты
    _UserId: '11292871'
})
console.log(data)           // { name: 'Yury', age: 13, _UserId: '11292871' }
console.log(data.age)       // 13
console.log(data.name)      // Yury
console.log(data._UserId)   // undefined
 

// Optimization
// example 3
const userData = [
    {id:1, name: 'Yury', job: 'Frontend', age: 22},
    {id:2, name: 'Alex', job: 'Fullstack', age: 27},
    {id:3, name: 'Irina', job: 'Manager', age: 42},
    {id:4, name: 'Vika', job: 'SMM', age: 23},
]
// нам нужно найти элемент по id
// userData.find(user => user.id ===3)  // данный метод позволяет циклом
// пройтись по массиву
// с помощью Proxy мы можем сделать это намного удобнее

const IndexedArray = new Proxy(Array, {
    construct(target, [args]){
        const index = {}
        args.forEach(item =>(index[item.id = item]))
        return new Proxy (new target(...args), {
            get(arr, prop){
                switch(prop){
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => {
                            index[id]
                        }
                }
            }

        })
    }
})

