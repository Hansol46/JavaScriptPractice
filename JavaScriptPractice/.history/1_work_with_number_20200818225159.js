//  [1] Number


// 
const num = 42  // integer
const float = 42.42 // float 
const pow = 10e3    // 10000


// Методы Number
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

// Проверки 
const weird = 2 / undefined 
console.log(Number.isNaN(weird))                           // true 
console.log(Number.isNaN(42))                              // false
console.log(Number.isFinite(Infinity))                     // false
console.log(Number.isFinite(12))                           // true 

// Методы приводящие к числу
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

// Метод фиксирующий кол-во чисел после запятой
console.log(0.4 + 0.2)                                     // 0.6000000000000001
console.log((0.4 + 0.2).toFixed(1))                        // 0.6, Method toFixed оставляет в скобках число после запятой.
console.log(+(0.4 + 0.2).toFixed(1))                       // 0.6, + в начале превращает наше число в число(в предыдущем примере 0.6 это строка)
console.log(parseFloat((0.4 + 0.2).toFixed(1)))            // 0.6, результат такой же как в примере выше



// [2]  BigIng


// work with BigInt
console.log(90071992547409919999999n - 9007199254740991999999n) // 81064793292668928000000n
console.log(-90071992547409919999999n)                     // -90071992547409919999999n
// console.log(90071992547409919999999.23231n) // *Error
// console.log(10n-4)                          // *Error
console.log(10n - BigInt(4))                   // 6n,  BigInt(4) = 4n
console.log(5n / 2n)                           // 2n


// [3]  Math


// constants 
console.log(Math.E)                            // 2.718281828459045
console.log(Math.PI)                           // 3.141592653589793

// work with Math
console.log(Math.sqrt(25))                     // 5
console.log(Math.pow(2,5))                     // 32
console.log(Math.abs(-42))                     // 42, возвращает абсолютное значение числа
console.log(Math.max(11, 111, 42, 4, 81))      // 111
console.log(Math.min(11, 111, 42, 4, 81))      // 4

console.log(Math.floor(4.9))                   // 4, округляет вниз
console.log(Math.floor(-4.9))                  // -5

console.log(Math.ceil(4.9))                    // 5, округляет вверх 
console.log(Math.ceil(.95))                    // 1
console.log(Math.ceil(4))                      // 4
console.log(Math.ceil(7.004))                  // 8
console.log(Math.ceil(-0.95))                  // -0
console.log(Math.ceil(-4))                     // -4
console.log(Math.ceil(-7.004))                 // -7

console.log(Math.round(4.9))                   // 5
console.log(Math.trunc)
