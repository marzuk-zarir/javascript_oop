/**
 * ? in js every primitive value and object type value inherit Object constructor
 * * people1 inherit Person constructor and Person constructor inherit Object Constructor
 */
function Person(name, age) {
    this.name = name
    this.age = age
    this.showInfo = function () {
        return `His name is ${this.name} and age is ${this.age}`
    }
}

const people1 = new Person('marzuk', 30)
console.log(people1)

// people1_proto -> Person Constructor -> Object Constructor
const peopleProto = Object.getPrototypeOf(Object.getPrototypeOf(people1))

const obj = Object.getPrototypeOf({ name: 'zarir' })

console.log(peopleProto === obj) // true
