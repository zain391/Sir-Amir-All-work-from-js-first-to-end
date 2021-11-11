 var display=document.getElementById("display");
 display.addEventListener("click",function(){
    console.log("i had to repeat this code so i am using the function.");
    console.log("i had to repeat this code so i am using the function.");
    console.log("i had to repeat this code so i am using the function.");
    console.log("i had to repeat this code so i am using the function.");
    console.clear();
 });
//  i am going to create an object
let obj1={
    name:"zain",
    class:"BS Information Technology",
    grade:"A+",
    age:20,
}
console.log(obj1);
// now i am going to create a new object by using the table format
let obj2={
    name:"hadi",
    cgpa:3.50,
    address:{
        city:"jhang",
        street:"shorkot wali",
        district:"Fsd",
    },
    brotherNames:['hadi','secondOne',3,4]
}
console.table(obj2);
console.clear();
// now i am going to create an array of int type
let arr1=[1,2,3,4,5,6,7];
console.log(arr1);
// now we will create an array of strings
let arr2=['zain','hadi','Ali','Haroon'];
console.log(arr2);
// now we will create an array of stringd as well as of numbers
let arr3;
arr3=['zain',20,'hadi',20,'Ali',21,"haroon",19];
console.log(arr3);
// now we will create a list of objects in an array
let arr4=[
    {
        name:"zain",
        age:20
    },
    {
        name:'hadi',
        age:20
    },
    {
        name:"haroon",
        age:19
    },
    // now we will create an object inside an obj
    {
        cityList:"names of citis of pak",
        names:
        {
            firstCity:"Fsd",
            secCity:"Isl"
        }
    }

];
console.log(arr4);
console.clear();
// now we will see some kind a operations on string

 



// const plusButton = document.getElementById("plusButton");
// const result = document.getElementById("result");
// const inputOne = document.getElementById("numberOne");
// const inputTwo = document.getElementById("numberTwo");
// plusButton.onclick = function () {
//   const valueOne = parseInt(inputOne.value);
//   const valueTwo = parseInt(inputTwo.value);
//   result.innerText = valueOne + valueTwo;
// };
// // const myPc = {
// //   ram: 8,
// // };
// // // console.log(myPc);
// // myPc.ram = 16;
// // myPc.graphicCard = 6;
// // // console.log(myPc);
// // const myStudents = [
// //   {
// //     rollNo: 6642,
// //     name: "Safyan",
// //   },
// //   {
// //     rollNo: 6861,
// //     name: "Ohad",
// //   },
// //   {
// //     rollNo: 7078,
// //     name: "Anas",
// //   },
// //   {
// //     rollNo: 5158,
// //     name: "Hamza",
// //   },
// // ];
// // // console.log(myStudents[1].name);
// // const mySelf = {
// //   // property: value
// //   // key: value
// //   // key, value pair
// //   name: "Amir Ali",
// //   age: 24,
// //   country: "Pakistan",
// //   eating() {
// //     console.log("I am eating rice");
// //   },
// //   // eating: function () {
// //   //   console.log("I am eating rice");
// //   // },
// //   students: myStudents,
// // };
// // // Create a function that add 2 numbers
// // function add(firstNumber, secondNumber) {
// //   const result = firstNumber + secondNumber;
// //   return { firstNumber: firstNumber, secondNumber, result };
// // }
// // const myResult = add(5, 3);
// // console.log(myResult);
// // console.log(add(5, 3)); // 12
// // console.log(add(2, 2)); // 12
// // console.log(add(6, 5)); // 12
// // console.log(add(4, 3)); // 12
