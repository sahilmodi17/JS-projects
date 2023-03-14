// synchronous means that one line will get exectuted  tan after other will get executed 

// example : 

// console.log(" script start here ");

// for(let i=0 ; i<10000; i++){
//     console.log("this is inside loop");
// }

//  loop will take time to end 

// console.log("script ends here "); // this will not execute till loops ends 

// this is synchronous 

// synchronous programing in single threaded

// setTimeout  ----> takes function as input and time at which it should execute 
// that time is in milliseconds
// it is provided by the browser
// if there is 0 millisec in set timeout it will print after the whole codes get over 

//  that time is minimum time delay 
// that event occur side by side 


// clear timeout  clear the settimeout 

//      #     setInterval     #

// console.log("script start here ");

// // setInterval(()=>{
// //     console.log(Math.random()*10);
// // } , 1000);

// console.log("script ends here "); 



//    #     callBack      #

// function myFunc(callback){
//     console.log("this is myFunc 1 ");
//     callback();
// }

// function myfunc2(){
//     console.log("this is myFunc 2");
// }

// myFunc(myfunc2);



const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");

setTimeout( () => {
    heading1.textContent = "Heading 1 ";
    heading1.style.color = "red";
    setTimeout( () =>{
    heading2.textContent = "Heading 2 ";
    heading2.style.color = "violet";
    setTimeout( () =>{
    heading3.textContent = "Heading 3 ";
    heading3.style.color = "green";
    },1000)
    },1000)
}  ,1000)

//  this ias callback hell