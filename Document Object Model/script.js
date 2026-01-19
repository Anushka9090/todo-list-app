// let a=document.getElementById("one");
// a.style.backgroundColor="orange";  //Changing background color of Div through JS
// a.innerText="Hello!";     //Chnaging text inside DIV thorugh JS

// let b=document.getElementById("btn");
// let count=0;
// b.addEventListener("click",() => {
// //    count++;
//    console.log("Button was clicked");
// });

let t=document.getElementById("toggle");
let a="light";
t.addEventListener("click",() => {

    if(a==="light"){
        a="dark";
        t.style.backgroundColor="red";
    }
    else{
        a="light";
        t.style.backgroundColor="green";
    }
});