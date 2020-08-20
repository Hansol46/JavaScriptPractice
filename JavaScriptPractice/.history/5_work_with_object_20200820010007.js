// [1] Object 

const person = {
    name: 'Alex',
    age: 21,
    isMan: true,
    languages: ['en', 'ru', 'uk'],
    greet() {
        console.log(`Hi, ${this.name}`)
    }
}