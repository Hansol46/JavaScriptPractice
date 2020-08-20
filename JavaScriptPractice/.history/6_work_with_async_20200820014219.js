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

// 
const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}

delay( ()=> {
    console.log('after 2 sec')
}, 2000)