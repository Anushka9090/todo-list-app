// const form=document.querySelector("form")
// const button=document.querySelector("button")
// const text=document.getElementById("text")

// const ul=document.createElement("ul")
// button.addEventListener("click" ,()=>{
//     if(!text.value)
//     {
//         alert("the work is done")
//     }
//     else
//     {
//     const li=document.createElement("li")
//     const textDiv=document.createElement("div")
//     textDiv.textContent=text.value

//     li.appendChild(textDiv)
//     ul.appendChild(li)
//     document.body.appendChild(ul)
//     text.value=""
//     }
// })

let a=[1,2,3,4,5];
a.forEach(function(num){
    return num*num;
});
console.log(a)