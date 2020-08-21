

//
class Students {
    constructor(name) {
        this.name = name
    }
    greet(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

// так мы делали до этого
// const student = new Students('Alex')
// console.log(student)                    // Students { name: 'Alex' }
// теперь используем рефлекты 
const student = Reflect.construct(Students, ['Igor'])
console.log(student)                       // Students { name: 'Igor' }