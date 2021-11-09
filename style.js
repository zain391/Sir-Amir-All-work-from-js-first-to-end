let counter=0;
let head=document.getElementById("head");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");

plus.addEventListener("click",function(){
    counter=counter + 1;
    head.innerText=counter;
});
minus.addEventListener("click",function(){
    counter=counter - 1;
    head.innerText=counter;
});