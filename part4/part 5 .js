// function sayHello(){
//     console.log("i would like to say hello");

// }
// setTimeout (( ) => {
//     sayHello();

// } ,4000);
// console.log("chaicode");
// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }
function outer (){
    let counter = 5;
    return function(){
        counter++;
        return counter;
    }
}
let increment = outer ();
console.log(increment());
console.log(increment());

console.log(increment());

console.log(increment());

console.log(increment());


