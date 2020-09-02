// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
class Animal {
    static type = 'ANIMAL'
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }
    voice() {
        console.log('i am Animal')
    }
}
const animal = new Animal ({
    name: 'Animal',
    age: 5,
    hasTail: true
})

console.log(animal)   
console.log(animal.voice()) // видно что объект animal наследует и может использовать функцию voice
//чтобы обратиться к type надо:
console.log(Animal.type)

// example 2 
class Cat extends Animal {
    static type = 'CAT!'
    //если хотим добавить цвет необходимо использовать конструктор
    constructor(options) {
        //чтобы не было ошибки надо запустить конструктор от наследуемого класса методом super
        super(options)          // этот метод вызывает конструктор от основного класса
        this.color = options.color
    }
    // мы можем перезаписать родительский метод voice
    // объявление методов в дочерних классах перетирает родитеский класс
    voice(){
        // но если нам необходимо использовать и родитеский метод пишем следующую конструкцию:
        super.voice()  // вызывается родительский а потом новый метод voice
        console.log('I am cat!!')
    }
    // можем использовать setters и getters
    get ageInfo(){
        return this.age * 7
    }
    set ageInfo(newAge) {
        this.age = newAge
    }
}
const cat = new Cat ({
    name: 'cat',
    age: 2,
    hasTail: true,
    color: 'black'
})
//наследовани работает, можем проверить:
console.log(cat)
console.log(cat.voice())
//work with get and set
console.log(cat.ageInfo)  // 1
cat.ageInfo = 12
console.log(cat.ageInfo)  // 84

// example 3
class Component {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }
    hide(){
        this.$el.style.display = 'none'
    }
    show(){
        this.$el.style.display = 'block'
    }
}
class Box extends Component {
    constructor(options){
        super(options.selector)

        this.$el.style.width = thiw.$el.stule.heigth = option.size + 'px'
        this.$el.style.background = options.color
    }
}
const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

// мы можем вызывать у box1 методы show и hide
// чтобы скрывать или показывать блок
console.log(box1.hide())
console.log(box1.show())

class Circle extends Box {
    constructor(options){
        // тут в super мы принимаем options, т.к наследуемся именно от класса Box
        // а у него в конструкторе был options
        super(options)

        this.$el.style.borderRadius = '50%'
    }
}
const c = new Circle ({
    selector: '#circle',
    size: 90,
    color: 'green'
})
// мы создали круг, и этот круг также имеет show и hide

