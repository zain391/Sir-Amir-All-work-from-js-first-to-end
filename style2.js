let fnum=document.getElementById("fnum");
let snum=document.getElementById("snum");
let result=document.getElementById("result");
let addition=document.getElementById("addition");
let sub=document.getElementById("sub");
let mul=document.getElementById("mul");
let division=document.getElementById("division");

addition.onclick = function(){
    const valueOne=parseInt(fnum.value);
    const valueTwo=parseInt(snum.value);
    result.innerText=valueOne+valueTwo;
}
sub.onclick=function(){
    const valueOne=parseInt(fnum.value);
    const valueTwo=parseInt(snum.value);
    result.innerText=valueOne-valueTwo;
}
mul.onclick=function(){
    const valueOne=parseInt(fnum.value);
    const valueTwo=parseInt(snum.value);
    result.innerText=valueOne*valueTwo;
}
division.onclick=function(){
    const valueOne=parseInt(fnum.value);
    const valueTwo=parseInt(snum.value);
    result.innerText=valueOne/valueTwo;
}
// <!-- <h1 id="result">0</h1>
// <button id="plusButton">+</button>
// <button id="minusButton">-</button> -->
// <h1 id="result">0</h1>
// <input type="number" placeholder="number 1" id="numberOne" />
// <input type="number" placeholder="number 2" id="numberTwo" />
// <button id="plusButton">+</button>
// <button id="minusButton">-</button>
// <button id="multiplyButton">*</button>
// <button id="divideButton">/</button>
// </body>
// <script>
// const plusButton = document.getElementById("plusButton");
// const result = document.getElementById("result");
// const inputOne = document.getElementById("numberOne");
// const inputTwo = document.getElementById("numberTwo");
// plusButton.onclick = function () {
//   const valueOne = parseInt(inputOne.value);
//   const valueTwo = parseInt(inputTwo.value);
//   result.innerText = valueOne + valueTwo;
// };
