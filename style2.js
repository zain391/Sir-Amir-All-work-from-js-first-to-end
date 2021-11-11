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

