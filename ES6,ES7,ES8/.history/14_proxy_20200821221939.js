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
