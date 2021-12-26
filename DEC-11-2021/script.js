
// const promise1=new Promise((resolve,reject)=>{

// });
// this was the first code
// resolve and reject are basically two functions that we have to call inside the promise
// if there is no resolve or reject working then the function is in infinte state or pendding state
// or we can say this will be the ifinite wait

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     } ,8000);
    // basic senario of promise
    // send request to server
    // wait
    // response arrived from server
    // resolve
// });

// promise1.then(function(){
//     console.log("funstion is resolved");
// })

// promise1.catch(function(){
//     console.log("funstion is \reject");
// })
const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
        reject();
    },8000)
promise1.then(function(){
    console.log("funstion is resolved");
})


// there is also a fetch api 
// await keyword in promis and fetch api