function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

// Car Constructor
function Car() {}
Car.prototype.drawBody = function () {
    console.log('This method draws all type of cars')
}

// Bmw
function BMW(model, color) {
    this.model = model
    this.color = color
}
inherit(BMW, Car)
BMW.prototype.drawBody = function () {
    console.log('This method draws only BMW cars')
}

// Toyota
function Toyota(model, color) {
    this.model = model
    this.color = color
}
inherit(Toyota, Car)
Toyota.prototype.drawBody = function () {
    console.log('This method draws only Toyota cars')
}

const car = new Car()
const toyota = new Toyota('primeo', 'white')
const bmw = new BMW('m4', 'black')

// * Same method but their outputs are different from others this called polymorphism
// ? drawnBody() is a common method of all objects but it behave different
car.drawBody()
toyota.drawBody()
bmw.drawBody()
