/**
 * * Constructor pattern is a normal function implementation and every properties and methods are declare with 'this' keyword
 * * so we can't use colon(:) but we should use equal(=)
 * - constructor pattern follow a naming convention: Every function's name starts with capital word
 */

function CreateRect(width, height) {
    this.width = width
    this.height = height
    this.getInfo = function () {
        console.log(`Width is ${this.width}`)
        console.log(`Height is ${this.height}`)
    }
}

/**
 * ? if we try to create a object without declare 'new' keyword....then inside constructor template's 'this' value refer Window object and create error bcz Window object don't have our properties and methods
 *
 * * So, we should make a object from constructor template with 'new' keyword
 *
 * * basically 'new' keyword is create a new empty object and bind template's code with new created object...so, 'this' keyword inside template's can refer new created object
 * ! and here is the main difference between Factory & Constructor pattern
 */

const rect1 = new CreateRect(20, 10)
console.log(rect1)
rect1.getInfo() // 20, 10

const rect2 = new CreateRect(100, 60)
console.log(rect2)
rect2.getInfo() // 100, 60
