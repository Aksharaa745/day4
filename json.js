const jsObject = {
    nmae : "john",
    age : 26,
    display: function(){
        console.log("Hello");
    },
};

// Javascript Object Notation
let jsonObject = {
    "name": "john harry",
    "age": 25,
};

// //methods (function inside objects) are not supported

//JSON method
let stringJSON = JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON = JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);

// localstorage
localStorage.setItem("username","John Harry");
let item = localStorage.getItem("username");
console.log(item);

localStorage.removeItem("username");
let item2 = localStorage.getItem("username");
console.log(item2);

//session storage
sessionStorage.setItem("username", "john Harry");





