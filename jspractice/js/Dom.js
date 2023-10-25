// # --- >id
// . --- >class
// tag <h1>--->class
// console.dir(document)


// let obj= {
//     name:"xyz",
//     age:23
// }
// obj.name="abc"
// console.log(obj)

// const heading1 = document.getElementById("heading1");
// console.dir(heading1);
// heading1.textContent="this heading is changed"

// const headings = document.getElementsByClassName("heading") // it return htmlcolection that is array like object
// console.log(headings)
// console.log(Array.isArray(headings))
// for (let i = 0; i < headings.length; i++) {
//     if (headings[i].textContent === "this is third  heading") {
//         headings[i].style.backgroundColor = "red"
//         headings[i].style.color = "white"
//         headings[i].style.textDecoration = "underline"
//         // headings[i].style.display = "none"
//     }
// }
// // school1978@
// queryselector using id////////////////////////////////////////////////
// const element = document.querySelector("#heading1")
// console.log(element)
// element.textContent="this is first demo of query selector"


// queryselector using class////////////////////////////////////////////////
// const element = document.querySelector(".heading")
// console.dir(element)
// element.textContent="this is first demo of query selector"
// queryselectorAll using class////////////////////////////////////////////////
// const element = document.querySelectorAll(".heading")
// for (let i = 0; i < element.length; i++) {
//     console.log(element[i])
//     if(element[i].textContent=="this is second heading"){
//         element[i].style.backgroundColor = "red"
//         element[i].style.color = "white"
//     }
// }


// DOM traversing ////////////////////////////////////////////
// document object model///////////////////////////////////// 

const rootElement  = document.getRootNode();
const htmlelement = rootElement.childNodes[0];
const bodyElement = htmlelement.childNodes[2];
console.log(bodyElement.childNodes)
// let 
// for (let i = 0; i < bodyElement.childNodes.length; i++) {
//         console.log(bodyElement.childNodes[i])
//         if(bodyElement.childNodes[i].textContent=="\n    "){
//             delete bodyElement.childNodes[i]
//         }
// }
console.log(bodyElement.childNodes)
