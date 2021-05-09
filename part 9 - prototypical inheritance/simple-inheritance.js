/**
 * * We can inherit a Vehicle class's prototype with Object.create() in other class's prototype
 */

function Vehicle() {}
Vehicle.prototype.vehicleInfo = function () {
    console.log('General Vehicle method for every type')
}

// Car
function Car(company) {
    this.company = company
}
Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.printInfo = function () {
    console.log(`This car is made by ${this.company}`)
}

// Boat
function Boat(model) {
    this.model = model
}
Boat.prototype = Object.create(Vehicle.prototype)
Boat.prototype.printModel = function () {
    console.log(`This boat's model is ${this.model}`)
}

// Plane
function Plane(country) {
    this.country = country
}
Plane.prototype = Object.create(Vehicle.prototype)
Plane.prototype.printCountry = function () {
    console.log(`This plane is made by ${this.country}`)
}

// ? Prototypical Chain

// * car1 -> Car -> Vehicle -> Object
const car1 = new Car('toyota')

// * boat1 -> Boat -> Vehicle -> Object
const boat1 = new Boat('B-25F')

// * plane1 -> Plane -> Vehicle -> Object
const plane1 = new Plane('Germany')

// all are inherited Vehicle Constructor Function's Prototype
car1.vehicleInfo()
boat1.vehicleInfo()
plane1.vehicleInfo()
