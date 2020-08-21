

//
class Students {
    constructor(name) {
        this.name = name
    }
    greet(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

const student = new Students('Alex')