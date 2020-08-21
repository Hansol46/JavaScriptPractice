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
        resolve('Done!')
    }, ms)
})

delay(1500).then( data => console.log(data))                // Done! 