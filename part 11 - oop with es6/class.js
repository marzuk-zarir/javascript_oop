/**
 * ! Class is syntactical sugar of constructor of Constructor func in js
 * * In class all property and proto member should declare in class's constructor method like other oop lang
 *
 * ! behind the screen:
 * * class converted into the constructor function
 * * all properties are set in the constructor's instance member
 * * all methods are set in the constructor's prototype member
 *
 * todo: we can declare methods without 'function' keyword in the class and object literal. this is a ES6 feature
 */

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    printWidth() {
        console.log(`This rectangle's width is ${this.width}`)
    }

    printHeight() {
        console.log(`This rectangle's height is ${this.height}`)
    }
}

const rectangle = new Rectangle(20, 10)
console.log(rectangle)
rectangle.printWidth()
rectangle.printHeight()
