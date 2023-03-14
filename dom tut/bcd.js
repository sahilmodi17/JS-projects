console.log("hello world");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener("click", (e)=>{
    console.log("You clicked something ...!! ");
    console.log(e);
})

// parent.addEventListener("click", ()=>{
//     console.log("You clicked parent...!! ");
// })

//  event bubbling ....^^^^
