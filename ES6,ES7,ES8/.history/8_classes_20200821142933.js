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
}
const frontend = new Programmer('Nady', 'frontend')
console.log(frontend)                               // Programmer { type: 'human', name: 'Nady', _job: 'frontend' }
frontend.greet()                                    // Nady say hello!  Rewritten
frontend.job()