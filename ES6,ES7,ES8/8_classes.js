// [1] Classes 

//
class Person {
    type = 'human'

    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(this.name + ' say hello!')
    }

}
const max = new Person('Max')
max.greet()                                         // Max say hello!
console.log(max.type)                               // human

class Programmer extends Person {
    constructor(name, job){
        super(name)
        this._job = job
    }
    greet() {
        super.greet()                               // Nady say hello!
        console.log('Rewritten')                    // Rewritten
    }
    get job() {
        return this._job.toUpperCase()
    }
    set job(job) {
        if (job.length < 2) {
            console.log('Problems...')
        } else {
            this._job = job
        }
    }
}
const frontend = new Programmer('Nady', 'frontend')
console.log(frontend)                               // Programmer { type: 'human', name: 'Nady', _job: 'frontend' }
frontend.greet()                                    // Nady say hello!  Rewritten
console.log(frontend.job)                           // FRONTEND
frontend.job = 'Backend'
console.log(frontend.job)                           // BACKEND



// [2] Static

// old 
class Util {
    average(...args){
        return args.reduce( (acc, i) => acc += i, 0) / args.length
    }
}
const util = new Util()
console.log(util.average(10, 20, 30, 40))           // 25
//new 
class Util2 {
    static average(...args) {                       // если поле явл. статическим, мы можем обращаться напрямую к классу и вызывать этот метод
        return args.reduce( (acc, i) => acc += i, 0) / args.length
    }
}
console.log(Util2.average(10, 20, 30, 40))          // 25