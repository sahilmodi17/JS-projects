console.log("hello");


//   #    Dom    #

// browser sees the whole info of the html file and after parsing it makes object 
// called document

// this object is in opend in the window object in form of key value 

// console.log(window.document);
// or
// console.log(document);


//   #     select document getelment by id   #

// console.log(document.getElementById("main-heading"));
// gives value in form of string 

// console.dir(document.getElementById("main-heading"));  
//  gives the value in form of obj
//  this will select only id in the html


//      #   selecting using query selector     #

//  this will select all the query ie class id btn etc

// console.log(document.querySelector("#main-heading"));

//  in this whem there are multiple class with same name then it will give only the first class of that name
// for all class queryselectorAll is used which gives Nodelist it is type of aray but an aray



//      #     change text     #

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something changed ";
// console.log(mainHeading.textContent);

// this textcontent will give all the content written if something is hidden it will give that also in console
// and another property is there innertext  
// it will give only text which is displayed in browser 


//      #     change style of elments    #

//      #    get and set attributes   #

// const link = document.querySelector("a");
// console.log(link.getAttribute("href")); 

// link.setAttribute("href" , "https://google.com");
// console.log(link.getAttribute("href")); 


//    #    loop    #

// const navItems = document.getElementsByTagName("a");

// for(i=0 ; i<navItems.length ; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor= "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// for (let navItem of navItems){
//     navItem.style.backgroundColor= "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// we cannot use for each loop
// so we need to convet html collrctions to Array

// let navItems = document.getElementsByTagName("a");

// navItems = Array.from(navItems);

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor= "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })


// const toDo = document.querySelector(".todo");
// console.log(toDo.classList);
// toDo.classList.add('bgDark');  adds class to todo in the section 
// toDo.classList.remove('container'); removes the class from the section todo
// const ans = toDo.classList.contains('container');  checks weather the given class is there in the section 
// console.log(ans);
// toDo.classList.toggle('bgDark');  inverse the class that is existing ie if the bgDark is present in the section than it will remove the class and if not present than it will add it to section 

// const header = document.querySelector(".header");
// header.classList.add('bgDark');
// console.log(header.classList);

// here if bgdark class is present first than header class in css then there will property of header class only because css executes the latest statement  



//   #     To add inner html    #

// here Todo 1 is prensent if we want another todo then this is use

// const todoList = document.querySelector(".todo-list");
// console.log(todoList);

// todoList.innerHTML += "<li>New Todo </li>" ;

// when to use it , when not to use it 

// when this is used then browser also renders the previous existing li when this is called 
// so this has performance isues
// we should use this when we have to change previous html tags 
// not to use to add the new elemnts


    // #      create Element    #

    // append , prepend , remove , before , after 

// const newTodoitem = document.createElement("li");
// const newTextNode = document.createTextNode("new todo item");
// newTodoitem.append(newTextNode);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoitem);

// this is lengthy way 

// const newTodoitem = document.createElement("li");
// newTodoitem.textContent = "new todo";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoitem); //adds this to end 
// todoList.prepend(newTodoitem); adds thid to starting 


// when we have to remove the elemnt

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);

//  before and after add the elements before and after the class tag is targeted here in our case before will add after form and after will before section 
//  ie it ul

// const newTodoitem = document.createElement("li");
// newTodoitem.textContent = "new todo";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoitem);
// todoList.after(newTodoitem);


//    #     One more method to insert the element    # 

//  this is not used so much  (insertAdjcentHtml)

//        beforebegin , beforeend , afterbegin , afterend 
//        before      , append    , prepend    , after        behaviour in previous property


//    #     Clone Node    # 

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// ul.append(li);

//  if we write prepend here then append will be overwritten 
//  and we want both so clonening is done 

// const li2 = li.cloneNode(); // this will not give the text content of li 1 so for that true keyword is used
// const li2 = li.cloneNode(true);
// ul.prepend(li2);

//   #   some old method to support internet explorer   #

//    appendChild , insertBefore , replaceChild , removeChild

 
//    #     static vs live list    #


// const listItems = document.querySelectorAll(".todo-list li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);
// console.log(listItems);

// here in listitems there will be only 5 li 6th will not be added because it is static list 

// querySelector will give static list 
// getElementsby... will give live list 


// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// ul.append(sixthLi);
// console.log(listItems);

// here in listitems there will be all 6 li because it is live list 



//  to get the dimensions of element 

// getBoundingClientRect(); // give all dimension top ,bottom , height , width , left , right etc
// getBoundingClientRect().top; give only top
// getBoundingClientRect().height; give only height



//    #      Intro to events      #

//  click , button press , hover

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", ()=>{
//         // btn.style.backgroundColor = "red";
//         console.log("you clicked me !!!");
// });


// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function(){      
//         // btn.style.backgroundColor = "red";
//         console.log("you clicked me !!!");
//         console.log(this);   // window in case of arrow function and btn in case of function()
// });

//  because arrow functions give this of prevouis obj


const todoForm = document.querySelector(".form-todo");
// console.log(todoForm);
const input = document.querySelector(".form-todo input[type='text']");
const newTodoLi = document.querySelector(".todo-list ");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    newLi.innerHTML =  ` <span class="text">  ${newTodoText} </span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div> `;
    newTodoLi.append(newLi);
    input.value="";
})

newTodoLi.addEventListener("click" , (e)=>{
    // check if user pressed which button 
    // console.log(e.target.classList);
    if(e.target.classList.contains("done")){
        const newSpan = e.target.parentNode.previousElementSibling;
        newSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
      targetedLi.remove();
    }

})
