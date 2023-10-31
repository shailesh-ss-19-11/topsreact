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

// createelement third way //////////////////////////////////
// afterbegin 
// beforebegin
// afterend
// beforeend

// for (let i = 0; i < 10; i++) {
//     const itemlist = document.querySelector("#item-list");
//     // todoList.insertAdjacentHTML("beforeend","<li>todo 1</li>")
//     const item = document.createElement("li");
//     item.textContent = "task " + i
//     itemlist.insertAdjacentElement("beforeend", item);
// }

// const btn = document.querySelector("#btn");
// const btnClasses = btn.classList;
// btnClasses.remove("btn-primary")
// btnClasses.add("btn-danger")

// function hide() {
//     const details = document.querySelector("#details");
//     details.classList.remove("showElement");
//     details.classList.add("hideElement");


//     const btnshow = document.querySelector("#btnshow");
//     btnshow.classList.add("showElement")

//     const btnhide = document.querySelector("#btnhide");
//     btnhide.classList.add("hideElement")
// }

// function show() {
//     const details = document.querySelector("#details");
//     details.classList.remove("hideElement");
//     details.classList.add("showElement");

//     const btnshow = document.querySelector("#btnshow");
//     btnshow.classList.remove("showElement")
//     btnshow.classList.add("hideElement")

//     const btnhide = document.querySelector("#btnhide");
//     btnhide.classList.remove("hideElement")
//     btnhide.classList.add("showElement")
// }

// let user = {
//     name:'shailesh',
//     age:23,
//     address:"nagpur",
// }
// user.adhar = "1234 1234 1234"

// console.log(user["name"])
// console.log(user.age)
// console.log(user.address)

// const keys = Object.keys(user)
// console.log(`${keys[0]} : ${user[keys[0]]}`)
// console.log(`${keys[1]} : ${user[keys[1]]}`)
// console.log(`${keys[2]} : ${user[keys[2]]}`)

// for(let i=0;i<keys.length;i++){
//     console.log(`${keys[i]} : ${user[keys[i]]}`)
// }

// for of loop //////////////////////////
// for(let key of Object.keys(user)){
//     // console.log(`${keys[i]} : ${user[keys[i]]}`)
//     console.log(`${key} : ${user[key]}`)
// }


// for in loop //////////////////////////
// for (const key in user) {
//     console.log(key +":"+ user[key])
// }
// for (const index in keys) {
//     console.log(keys[index] +": "+ user[keys[index]])
// }

// let user1 = {
//     name:'shailesh',
//     age:23,
//     address:"nagpur",
//     userdetails : function(){
//         console.log(`my name is ${this.name} age is ${this.age} and address ${this.address}`)
//     }
// }
// let user2 = {
//     name:'vinaty',
//     age:23,
//     address:"nagpur",
//     userdetails : function(){
//         console.log(`my name is ${this.name} age is ${this.age} and address ${this.address}`)
//     }
// }
// console.log(user2)
// user2.userdetails();

// const usermethods = {
//     userdetails: function () {
//         console.log(`my name is ${this.name} age is ${this.age} and address ${this.address}`)
//     },
//     isuser18: function () {
//         return this.age>18;
//     },
//     ismmaried: function () {
//         return this.marriedStatus;
//     }
// }

// function createUser(name, age, address,marriedStatus) {
//     let user = {
//         name,
//         age,
//         address,
//         marriedStatus,
//         userdetails:usermethods.userdetails,
//         isuser18:usermethods.isuser18,
//         ismmaried:usermethods.ismmaried,
//     }
//     return user;
// }

// const user1 = createUser("shailesh", 23, "nagpur",true);
// const user2 = createUser("vinay", 12, "nagpur",true);
// console.log(user1)
// console.log(user2.ismmaried())
// user1.userdetails();

// const obj1 = {
//     key1:"value1",
//     key2:"value2"
// };

// const obj2 = Object.create(obj1)
// console.log(obj2)
// obj2.key3="value3"
// obj2.key4="value4"

// const usermethods = {
//     userdetails: function () {
//         console.log(`my name is ${this.name} age is ${this.age} and address ${this.address}`)
//     },
//     isuser18: function () {
//         return this.age > 18;
//     },
//     ismmaried: function () {
//         return this.marriedStatus;
//     }
// }

// function createUser(name, age, address, marriedStatus) {
//     let user = Object.create(usermethods)
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     user.marriedStatus = marriedStatus;
//     return user;
// }

// const user1 = createUser("shailesh", 23, "nagpur", true);
// const user2 = createUser("vinay", 12, "nagpur", true);
// console.log(user1)
// console.log(user2.ismmaried())
// user1.userdetails();


// api call ///////////////////////////////////////////////
// get ////////// getting data from server 
// post ///////// send data to the server
// put ////////// update specific data in server
// patch ////////// update specific data in server
// delete ///////// delete data from server

const BASEURL = "https://retoolapi.dev/IVw8LS/data"
function getuserdata() {
    var userdata = [];
    fetch(BASEURL)
        .then((response) => response.json())
        .then((result) => {
            userdata = result;
            console.log(userdata)
        })
}
getuserdata();



// post data using api /////////////////////////////////////////////

function adduser() {
    const name = document.getElementById("input1").value;
    const age = document.getElementById("input2").value;
    const address = document.getElementById("input3").value;

    let user = {};
    user.name = name
    user.age = age
    user.address = address
    console.log(user)

    fetch(BASEURL, {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response) => {
        if (response.status === 201) {
            getuserdata();
        }
    })
}

function updateUser() {
    let user = {};
    user.name = "aniket";
    user.age = 87;
    user.address = "amravati"
    fetch(`${BASEURL}/42`, {
        method: "put",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    }).then((response) => {
        if (response.status === 200) {
            getuserdata();
        }
    })
}
updateUser();


function deletuser(){
    fetch(`${BASEURL}/42`, {
        method: "delete"
    }).then((response) => {
        if (response.status === 200) {
            getuserdata();
        }
    })
}