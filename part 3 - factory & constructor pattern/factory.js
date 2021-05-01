/**
 * ! factory pattern:
 * * there is no class in js...but two pattern for create template: factory and constructor pattern
 * ? suppose, we need 30 rectangle object with same method but only change is width and height...we can declare 30 object but it is maintaining too tough
 * * so we can make a template for rectangle and grab width and height from argument
 * - this two pattern creates a template for making objects
 */

// * factory pattern is a function and it returns a object...its implementation is same like object literal and dynamic values are set from function arguments
function createRect(width, height) {
    return {
        width: width,
        height: height,
        getInfo: function () {
            console.log(`Width is ${this.width}`)
            console.log(`Height is ${this.height}`)
        },
    }
}

// - when we make a object from factory template we don't need to use 'new' keyword bcz it returns a object and 'this' keyword is refer returned object

const rect1 = createRect(30, 15)
console.log(rect1)
rect1.getInfo() // 30, 15

const rect2 = createRect(100, 80)
console.log(rect2)
rect2.getInfo() // 100, 80
