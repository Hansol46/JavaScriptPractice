// [1] Reflect 

// example 1
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

// example 2
class ProtoStudents {
    university = 'Oxford'
}
const student2 = Reflect.construct(Students, ['Igor'], ProtoStudents)
console.log(student2)                       // ProtoStudents { name: 'Igor' }

// apply
Reflect.apply(student.greet, {name: 'Test'}, [ ])   // Hi, my name is Test
console.log(Reflect.ownKeys(student))