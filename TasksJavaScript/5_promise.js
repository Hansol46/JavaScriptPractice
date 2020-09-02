// [1] Promise 
// можем создать эмуляцию запроса на сервер
// console.log('create data')
// setTimeout( () => {
//     console.log('loading data')

//     const backend = {
//         port: 2000,
//         server: 'serv123',
//         status: 'working'
//     }
//     setTimeout( ()=> {
//         backend.mod = true 
//         console.log('data is ready', backend)
//     },2000)
// },2000)

// А теперь тоже самое сделаем с помощью промисов 
console.log('create data')
const p = new Promise ( (resolve,reject) => {
    setTimeout( () => {
        console.log('data loading')
        const backend = {
            port: 2000,
            server: 'serv123',
            status: 'working'
        }
        resolve(backend)
    },2000)
})
// у промисов есть свой набор методов напрмер .then
// то что мы передаем в параментры кол бэк функции это то что принимает наш resolve
p.then( (data) => {
    return new Promise( (resolve, reject)=> {
        setTimeout( ()=> {
        data.mod = true
        resolve(data)
        },2000)
    })
    // мы можем не создавать переменную p2 а сразу вернуть промис
    // p2.then( clientData => {
    //     console.log('data create!:', clientData)
    // })
})  //чтобы обработать ошибку можем использовать метод catch
.catch( err => console.error('Error:', err))
.then(clientData => {
    console.log('data ready!:', clientData)
}).finally( () => console.log('Finally!'))  // не важно выполнился или нет наш промис finally вернет нам то что нужно


const sleep = ms => new Promise ( resolve => {
    return setTimeout (()=>resolve(), ms)
})
sleep(2000).then( () => console.log('After 2 sec'))
sleep(3000).then(()=> console.log('After 3 sec'))

// у промисов есть еще методы, например метод all
// all принимает в себя массив промисов, и завершится тогда, когда завершатся все массивы 
Promise.all([sleep(2000), sleep(5000)]).then( ()=> {
    console.log('all promise ')
})
// метод race работает как all, только выполняется он тогда, когда выполнится первый в массиве промис
Promise.race([sleep(2000), sleep(5000)]).then( ()=> {
    console.log('race promise')
})