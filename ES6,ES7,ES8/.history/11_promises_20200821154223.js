// [1] Promises 
// удобная конструкция позволяющая работать с ассинхронным кодом 

setTimeout( () => {                     // пример ассинхронности 
    console.log('after 1sec')
}, 1000)

// example 1
// const promise = new Promise( (resolve, reject) => {
//     return setTimeout( () => {
//         resolve('Success')
//     }, 1000)
// })

// object promise have 3 methods: .then .catch .finally
// example 2
const delay = ms => new Promise( (resolve, reject)=> {
    return setTimeout( () => {
        resolve(`Done! ${ms}`)
    }, ms)
})

delay(1500)
    .then( data => delay(500))                // Done! 
        .then( data => console.log(data))
            .catch( err => console.log(err))
                .finally( () => console.log('Finally'))

async function asyncDelay() {
    const data = await delay(2000)           // равносильно строчке  .then( data => delay(500))  
    console.log(data)
}
asyncDelay()                                // Done! 2000