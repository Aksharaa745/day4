let newObject = {
    name: "John",
    display: function(){
        console.log("Hello");
    }

}
newObject.display();

console.log("Hello js!");
console.error("Something went wrong!");
console.warn("This is a warning");
console.table([{name: "Alic"}, {name: "Bob"}]);
console.time("loop");
for(let i =0;i<100000;i++);
console.timeEnd("loop");

//eval() function - don't use this in live projects

const x =10;
const y = 20;
const result = eval("x + y");
console.log(result);


//strict mode

"use strict";
let a = 10;
b=20;

// ternary operator(? :)
let value = (1<2) ? 1 : 2;
console.log(value);

// && - guard operator

let m = (1>2) && 5;
console.log(m);

// default operator - ||
let input;
let j = input || 4;
console.log(j);


//falsy values:
//0, '' , NaN, undefined, null

