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

// const rootElement  = document.getRootNode();
// const htmlelement = rootElement.childNodes[0];
// const bodyElement = htmlelement.childNodes[2];
// console.log(bodyElement.childNodes)
// const bodyChilds = bodyElement.childNodes;
// console.log(bodyChilds[1].nextSibling.nextSibling)


// first way of create element 
// create element in html using js ///////////////////////////////////
// const createElementDemo = document.querySelector("#createElementDemo");
// console.dir(createElementDemo);
// createElementDemo.innerHTML = "<h2>this is first line</h2>"
// createElementDemo.innerHTML += "<h2>this is second line</h2>"

// second way of create element 
// const itemList = document.querySelector("#item-list")
// console.log(itemList);
// for (let i = 0; i < 10; i++) {
//     const item = document.createElement("li");
//     item.textContent = `item ${i}`
//     console.log(item);
//     itemList.append(item);
// }