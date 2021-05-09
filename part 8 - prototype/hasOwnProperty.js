const Car = function (company, model) {
    this.company = company
    this.model = model

    this.func = function () {
        console.log('test')
    }
}

Car.prototype = {
    type: 'Sedan',
    printModel: function () {
        console.log(`car is made by ${this.company} and model is ${this.model}`)
    }
}

const bmw = new Car('BMW', 'x-4f')
bmw.printModel()

/**
 * ? hasOwnProperty():
 * * if provided members store in instance it return true
 * * prototype members are not object's own members thats why it return false with prototype members
 *
 * ? Object.keys:
 * * return a array like object with only instance members
 *
 * ? for in loop:
 * * it can iterate instance and prototype members
 */

console.log(bmw.hasOwnProperty('company')) // true
console.log(bmw.hasOwnProperty('model')) // true
console.log(bmw.hasOwnProperty('sedan')) // false
console.log(bmw.hasOwnProperty('printModel')) // false

// keys method prints only instance's members
console.log(Object.keys(bmw)) // ["company", "model"]

// for in loop can iterate both instance and prototype members
for (let i in bmw) console.log(i)
