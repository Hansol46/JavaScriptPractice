// [1] Promises 
// удобная конструкция позволяющая работать с ассинхронным кодом 

setTimeout( () => {                     // пример ассинхронности 
    console.log('after 1sec')
}, 1000)

const promise = new Promise( (resolve, reject) => {
    return setTimeout( () => {
        resolve('Success')
    })
})