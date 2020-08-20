// [1] Event loop



// example 1
const timeout = setTimeout(()=>{
    console.log('Timeout')
}, 1500)

clearTimeout(timeout)                   //очищает 


// example 2
const interval = setInterval( () =>{
    console.log('interval 1sec')
}, 1000)                               // будет выводить в консоль каждую секунду сообщение 

clearInterval(interval)

// example 3
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay( ()=> {
    console.log('after 2 sec')
}, 2000)


// [2] async/ await 


//
async function f() {
    return 23
}
console.log(f())                     // Promise { 23 }


async function f2() {
    return Promise.resolve(23)
}











// example 3
// const delay = (wait = 1000) => {
//     const promise = new Promise ( (resolve, reject) => {
//         setTimeout( () => {
//             // resolve()
//             reject('Error :(')
//         }, wait)
//     })
//     return promise
// }
// // delay()                                   // (node:8256) UnhandledPromiseRejectionWarning: Error :(

// // example 4
// // delay(2500)
// //     .then(()=>{
// //         console.log('after 2 seconds')
// //     })
// //     .catch(err => console.error('Error', err))
// //     .finally( () => console.log('Finally'))
    
// //
// const getData = () => new Promise( resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]))

// // getData().then(data => console.log(data))

// async function asyncExample() {
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('data', data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }