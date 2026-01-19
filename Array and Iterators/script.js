//Print all Elements
// let arr=[10,20,30];
// arr.forEach(display);
// function display(element){
//     console.log(element);
// }
//print even numbers
// let arr=[1,2,3,4,5,6];
// let newarr=arr.filter(isEven);
// console.log(newarr);
// function isEven(element){
//     return element%2===0;
// }

//find sum using forEach and reduce
// let arr=[5,10,15,20];
// let total=arr.reduce(sum);
// console.log(total);
// function sum(previous,next){
//     return previous+next;
// } 

//convert string to uppercase

// const names=["ram","sita"];
// names.forEach(upperCase);
// function upperCase(element,index,array){
//     array[index]=element.toUpperCase();
// }
// console.log(names);

//count numbers>50

// let nums=[24,55,56,88,25];
// let count=nums.filter(n=>n>50).length;
// console.log(count);

//double values

// let arr=[1,2,3];
// let result=arr.map(double);
// console.log(result);
// function double(element){
//     return element*2;
// }
// add 18%gst
// // let prices=[100,200];
// // let gst=prices.map(p=>p+p*0.18);
// console.log(gst);
// //celsisus to fahrenheit
// let c=[10,20,30];
// let f=c.map(t=>(t*9/5)+32);
// console.log(f);
// find name length
// let names=["riya","ram"];
// let lengths=names.map(n=>n.length);
// console.log(lengths);

//add 10 to each 
// let arr=[5,10];
// let add=arr.map(n=>n+10);
// console.log(add);
//filter even numbers
// let arr=[1,2,3,4,5,6];
// let newarr=arr.filter(isEven);
// console.log(newarr);
// function isEven(element){
//     return element%2===0;
// }
//numbers>25
// let arr=[10,20,90,,50];
// let num=arr.filter(n=>n>25);
// console.log(num);
// strings starting with A
let names=["Anu","Amu","Ram"];
let arr=names.filter(n=>n.startsWith("A"));
console.log(arr);
// 