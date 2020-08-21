// [1] Rest


// example 1
function average(arr) {
    return arr.reduce( (acc, i) => acc += i, 0) / arr.length
}

console.log(average([10, 20, 30, 40]))                          // 25

// example 1
function average2(...arr) {
    return arr.reduce( (acc, i) => acc += i, 0) / arr.length
}
console.log(average2(10, 20, 30, 40, 50))                       // 30


// [2] Spread
// Этот оператор позволяет развернуть массив
const arr = [1, 2, 3, 5, 8, 13]
console.log(arr)                                                // [1, 2, 3, 5, 8, 13]
console.log(...arr)                                             // 1 2 3 5 8 13    разворачивает массив
console.log(Math.max(arr))                                      // NaN  к вопросу где может применяться оператор spread
console.log(Math.max(...arr))                                   // 13  (теперь все работает)
// ранее использовался следующий метод 
console.log(Math.max.apply(null, arr))                          // 13
// create new array
const fib = [1, ...arr]
console.log(fib)