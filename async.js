//setTimeout
// function hello(){
//     console.log("hello from setTimeout\")
// }
// setTimeout(() => console.log("hell from setTimout"),5000);
// console.log('hello');

// let count = 0;
// let timer = setInterval(() => {
//     count++;
//     console.log("Hello again");
//     if(count>5){
//       clearInterval(timer);
// }
// },2000);
// console.log("hello from js")

//callbacks
// function doTask(taskName,callback){
//     console.log(`Starting ${taskName}...`);
//     setTimeout(()=>{
//         console.log(`${taskName} completed!`);
//         callback();
//     },5000);
// }
// doTask("REading Book",()=>{
//     console.log("Now reading chapter 10");
// });

//callback hell - nested back logic
//promises

let order = new Promise((resolve, reject)=>{
    let isWorking = false;
    setTimeout(()=>{
        if(isWorking){
            resolve("Order is ready");
        }else{
            reject("Order delay");
        }
    },3000);
});
order
    .then((message)=> console.log("Success: ",message))
    .catch((error) => {
        console.log("Error: ",error);
    });

