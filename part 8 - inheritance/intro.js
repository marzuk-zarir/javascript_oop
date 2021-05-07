/**
 * ? javascript use prototypical inheritance
 * * prototype means a parent object and every object has a prototype except Object constructor
 * - for get prototype of an object we can use Object.getPrototypeOf(object_name) or object_name.__proto__ ( deprecated )
 */

// person's prototype inherit Object constructor's prototype
const person = {}
const personProto = Object.getPrototypeOf(person)
console.log(personProto)

// personArray's prototype inherit Array constructor's prototype
const personArray = []
const personArrayProto = Object.getPrototypeOf(personArray)
console.log(personArrayProto)
