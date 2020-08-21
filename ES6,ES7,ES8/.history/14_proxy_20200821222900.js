//

//
const validator = {
    get(target, prop) {
        return prop in target ? target[prop] : `Поля ${prop} нету`
    },
    set (target,prop,value) {
        if(value.length > 2) {
            Reflect.set(target,prop,value)
        } else {
            console.log(`Длинна должна быть больше 2х символов. Сейчас она ${value.length}`)
        }
    }
}
const form = {
    login: 'tester',
    password: 123123
}

const formProxy = new Proxy(form, validator)

console.log(formProxy)                            // { login: 'tester', password: 123123 }
console.log(formProxy.login)                      // tester
console.log(formProxy.password)                   // 123123
console.log(formProxy['username'])                // Поля username нету

// все меняется
formProxy.password = '123'
console.log(formProxy.password)                   // 123

//но если мы сделаем пароль который не соотвествует валидации
formProxy.password = '12'                         // Длинна должна быть больше 2х символов. Сейчас она 2
console.log(formProxy.password)                   // 123, выводится старый пароль


// Можно применять прокси к функциям
function log(message) {
    console.log('[Log]:', message)
}
const proxy = new Proxy(log, {
    apply(target, thisArg, argArray){
        if(argArray.length === 1) {
            Reflect.apply(target, thisArg, argArray)
        }else {
            console.log('Количество аргументов не совпадает')
        }
    }
})
proxy('Custom message')                            //[Log]: Custom message
proxy()
proxy('Message', 2)