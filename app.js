// let headersAndParagraphs = document.querySelectorAll("h1,p");


// let nav = document.querySelector("nav");


// console.log(headersAndParagraphs[0].firstChild);
// console.log(headersAndParagraphs[0].firstChild.nodeValue);
// console.log(nav.nodeName);

let box1 = document.querySelector("section").firstElementChild;
let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;

box1.classList.add("disappear");
box1.classList.remove("dark");