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
}
const frontend = new Programmer('Nady', 'frontend')