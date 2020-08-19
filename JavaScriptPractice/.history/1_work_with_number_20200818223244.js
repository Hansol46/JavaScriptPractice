// Number


// 
const num = 42  // integer
const float = 42.42 // float 
const pow = 10e3    // 10000


//
console.log('Max safe integer', Number.MAX_SAFE_INTEGER)   // 9007199254740991
console.log('Math.pow 53 ', Math.pow(2, 53))               // 9007199254740992
console.log('Min safe integer', Number.MIN_SAFE_INTEGER)   // -9007199254740991
console.log('Max value', Number.MAX_VALUE)                 // 1.7976931348623157e+308
console.log('Min value', Number.MIN_VALUE)                 // 5e-324
console.log('Positive Infinity', Number.POSITIVE_INFINITY) // Infinity
console.log('Negative Infinity', Number.NEGATIVE_INFINITY) // -Infinity
console.log('2 / 0', 2 / 0 )                               // Infinity
console.log('NaN', Number.NaN)                             // NaN
console.log(typeof NaN)                                    // number

//
const weird = 2 / undefined 
console.log(Number.isNaN(weird))                           // true 
console.log(Number.isNaN(42))                              // false
console.log(Number.isFinite(Infinity))                     // false
console.log(Number.isFinite(12))                           // true 

//
const stringInt = '12'
const stringFloat = '12.12'
console.log(Number.parseInt(stringInt)+2)                  // 14, мы parseInt метод, преобразует строку в число
console.log(parseInt(stringInt)+2)                         // 14, ключевое слово Number можно опустить
console.log(Number(stringInt)+2)                           // 14, подразумевается что мы сразу работаем с числом
console.log(+stringInt + 2)                                // 14, можно использовать и такой синтаксис 
// аналогично для float
console.log(parseFloat(stringFloat) + 2)                   // 14.12 
console.log(Number(stringFloat) + 2)                       // 14.12
console.log(+stringFloat + 2)                              // 14.12

//
console.log(0.4 + 0.2)                                     // 0.6000000000000001
console.log((0.4 + 0.2).toFixed(1))
