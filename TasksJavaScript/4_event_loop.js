// [1] Async 
// если мы хотим вывести сообщение в консоль через какие то время
// то может воспользоваться методом глобального объекта window

setTimeout( () => {
    console.log('after 2 sec')
}, 2000)
setTimeout( () => {
    console.log('after 3 sec')
}, 3000)
function timeoutFiveSec(){
    console.log(
        `after 5 sec)`
    )
}
setTimeout(timeoutFiveSec, 5000)

// Event loop 
// это специальный цикл который делает итепацию по списку событий в очереди 