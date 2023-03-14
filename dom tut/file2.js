// const rootNode = document.getRootNode();
// const htmlElements = rootNode.childNodes[0];

// console.log(htmlElements.childNodes);
// const headElement = htmlElements.childNodes[0];
// const txtElement = htmlElements.childNodes[1];
// const bodyElement = htmlElements.childNodes[2];
// console.log(headElement.nextSibling);


const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode;
body.style.color = "#efefef";
body.style.backgroundColor = "333";