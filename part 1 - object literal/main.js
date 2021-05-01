/**
 * ! object literal:
 * * object is sort in key-value pair like:
 * * property: value
 * ? method:
 * * in object's property if declare a function. then the function is called method
 *
 * ? method declaration in ES5:
 * * { method_name: function() { code... } }
 * ? method declaration in ES6:
 * * { method_name() { code... } }
 *
 * ? 'this' value:
 * * in method if we want to access a property in same object where method is located...we should add 'this.property_name'
 */

// rectangle object
const rectangle = {
    width: 100,
    height: 80,
    widthAndHeight() {
        console.log(
            `I am Rectangle. My width is ${this.width} and height is ${this.height}`
        )
    },
}

console.log(rectangle.width) // 100
rectangle.width = 200
console.log(rectangle.width) // 200

rectangle.widthAndHeight() // I am Rectangle. My width is 200 and height is 80
