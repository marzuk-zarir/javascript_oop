/**
 * ! Constructor Property:
 * note: constructor pattern and constructor property are not same
 * * constructor property is a reference of template which is used to make a object
 *
 * * In object literal & factory pattern, object is created from built-in Object() or Function() constructor. so, built-in template reference is native. thats why we get 'f() [native code]' this output
 *
 * * In constructor pattern, 'new' keyword use must and 'new' keyword can makes a constructor. that's why we can get reference of whole template
 */

// object literal
const obj = {}
console.log(obj.constructor)

// factory pattern
function reactFactory(width, height) {
    return {
        width: width,
        height: height,
        printArea: function () {
            console.log(`rectFactory's area is ${this.width * this.height}`)
        },
    }
}
// constructor pattern
function RectConstructor(width, height) {
    this.width = width
    this.height = height
    this.printArea = function () {
        console.log(`RectConstructor's area is ${this.width * this.height}`)
    }
}

// new object with factory pattern
const rectFac = reactFactory(20, 10)
console.log(reactFactory.constructor) // invisible f() [native code]

// new object with constructor pattern
const rectCons = new RectConstructor(30, 15)
console.log(rectCons.constructor) // visible template
