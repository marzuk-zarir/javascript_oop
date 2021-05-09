/**
 * ? Prototype is a object
 * * we can define a method in prototype. we can also define method in main Constructor but it duplicate our method. thats why we should define our method in constructor's prototype
 * * if we set method in specific constructor's proto. it is inherited all object which is created from this prototype
 */

// Put a Custom Method on Array Constructor's Prototype
const arr = []
Array.prototype.myFunc = function () {
    console.log('Our First Custom Method for Array Constructor Prototype')
}
console.log(Array.prototype)

// Person Constructor
const Person = function (name, age) {
    this.name = name
    this.age = age
}
// Put customFunc in the Person Constructor's Prototype
Person.prototype.customFunc = function () {
    console.log(`${this.name}, ${this.age}`)
}
const p1 = new Person('Marzuk', 16)
const p2 = new Person('Zarir', 20)
p1.customFunc()
p2.customFunc()

/**
 * * we can get prototype with those methods....
 */
console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype)
console.log(p1.__proto__) // Deprecated
