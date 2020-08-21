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
console.log(average2(10, 20, 30, 40))