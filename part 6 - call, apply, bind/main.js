/**
 * ? call, apply, bind use for change 'this' keyword value in the function body
 * * call & apply methods are call the function instantly
 * * bind method return a function which can use after
 */
const person = {
    firstName: 'Marzuk ',
    lastName: 'Zarir,',
}

function fullName(age) {
    console.log(this.firstName + this.lastName, `age is ${age}`)
}

// fullName(15) // => NaN, age is 15
// by default, 'this' keyword is refer a object..as we define this function in global scope...so, 'this' keyword refer Window/Global object
// there is no firstName, lastName property in Window object that's why it print NaN
// by using call, apply, bind method we can change 'this' keyword's execution context

// ! call
// * in call,apply,bind methods in first argument we should provide a object which refer 'this' keyword value, then we should use parameter after by after
// call(object, arguments...)
fullName.call(person, 15) // => Marzuk Zarir, age is 15

// ! apply
// * apply method is all most same as call method but it takes all parameter in array
// apply(object, [arguments...])
fullName.apply(person, [16]) // => Marzuk Zarir, age is 16

// ! bind
// * bind method works like call and apply but it not call the function immediately
// * it returns a function, which can store in variable
// * we can pass parameters in bind method(like call method) or we can pass when we call variable's function
// bind(object, (optional)arguments....) returns function
// const printName = fullName.bind(person, 20) or
const printName = fullName.bind(person)
printName(20) // => Marzuk Zarir, age is 20
