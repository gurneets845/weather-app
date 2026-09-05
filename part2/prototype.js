let computer = { cpu:14}
let lenovo = {
    screen : "HD",
    __proto__:computer,


}
let tomhardware = {}
// console.log(`lenovo`, lenovo.__proto__);

let car = {tyre:4};
let tesla = {diver:"AI"};
Object.setPrototypeOf(tesla ,car)
console.log(`tesla`,Object.getPrototypeOf(tesla))