// [1] Event loop


// example 1
const timeout = setTimeout(()=>{
    console.log('Timeout')
}, 1500)

clearTimeout(timeout)                   //очищает 


// example 2
const interval = setInterval( () =>{
    console.log('interval 1sec')
}, 1000)