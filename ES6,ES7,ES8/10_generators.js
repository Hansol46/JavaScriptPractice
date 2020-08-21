// [1] Iterator


const array = [10, 20, 30,40]
const str = 'Hello'

console.log(array[Symbol.iterator])         // [Function: values]
console.log(str[Symbol.iterator])           // [Function: [Symbol.iterator]]

//example 1
const iter = array[Symbol.iterator]()
console.log(iter.next())                    // { value: 10, done: false }
console.log(iter.next())                    // { value: 20, done: false }
console.log(iter.next())                    // { value: 30, done: false }
console.log(iter.next())                    // { value: 40, done: false }
console.log(iter.next())                    // { value: undefined, done: true }

//example 2
const iter2 = str[Symbol.iterator]()
console.log(iter2.next())                    // { value: 'H', done: false }
console.log(iter2.next())                    // { value: 'e', done: false }
console.log(iter2.next())                    // { value: l, done: false }
console.log(iter2.next())                    // { value: l, done: false }
console.log(iter2.next())                    // { value: o, done: false }
console.log(iter2.next())                    // { value: undefined, done: true }

// new method 
// cycle for of 
for (let item of array) {
    console.log(item)                       // 10 20 30 40 
}
for (let item of str) {
    console.log(item)                       // H e l l o  
}

// example 2
const leng =  {
    le: [ 'ru', 'kz', 'by', 'ua']
}

for( let item of leng.le) {
    console.log(item)
}


// [2] Generator
function *gen(num = 4) {
    for(let i=0; i < num; i++){
        yield i
    }

}
const iter4 = gen(3)
console.log(iter4)                  //Object [Generator] {}
console.log(iter4.next())           // { value: 0, done: false }
console.log(iter4.next())           // { value: 1, done: false }
console.log(iter4.next())           // { value: 2, done: false }
console.log(iter4.next())           // { value: undefined, done: true }