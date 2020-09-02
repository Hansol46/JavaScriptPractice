const delay = ms => {
    return new Promise( resolve => setTimeout(()=> resolve(),ms))
}
// delay(2000).then(()=> console.log('2sec'))
const url = 'https://jsonplaceholder.typicode.com/todos'

// example 1
// реализуем запрос через promise 

// function fetchTodos(){
//     console.log('fetch todo started')
//     return delay(2000).then( ()=> {
//         // fetch позволяет сделать ajax запрос и вернуть promise
//         return fetch(URL)
//     }).then(response => response.json()) // .json это некий API используемый в методе fetch 
// }
// fetchTodos()
//     .then(data => console.log('data:', data))
//         .catch(error => console.error(error))
//             .finally(()=> console.log('fetch todo finished'))

// example 2
// реализуем запрос через async await 
async function fetchAsyncTodos(){
    console.log('fetch started')
    // аналогом функций .catch и .finally есть функции try,catch,finally
        try {
        // те функции которые применяет оператор await то обязательно нужно делать функцию ассинхронной 
        // поэтому добавляем перед функцией слово async
        // вместо метода .then обрабатывающего promise используем await
        await delay(2000) // await позволяет не переходить к следующей строчке, пока текущий promise не выполнится
        // await обрабатывает promise и получает response в обычную переменную
        const response = await fetch(url)
        const data = await response.json()
        console.log('data:', data)
        }
        catch (error){
            console.error(error)
        }
        finally {
            console.log('fetch finished!')
        }

}
// fetchAsyncTodos()
console.log(fetchAsyncTodos())