const para = document.getElementById("msg");
console.log(para.innerText);

para.innerText = "This is set via javascript";
const hiButton = document.querySelector(".js-button")
//const hiButton = document.querySelector("#js-button")

//Event Listerners
hiButton.addEventListener("click", () => {
    console.log("Hi");
});
