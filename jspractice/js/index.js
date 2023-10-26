// console.log("hello");

// in const type of variable we cant chnage the value
// const name = "shailesh";

// comment ---> comment is unexecutable code for the compiler

// in let we can change the value and let has its own local scope
// let name = "shailesh";
// name = "xyz"
// console.log(name);

// in var we can define same name varibale multiple times
// var has the global scope
// var name = "shailesh";
// name ="xyz"
// console.log(name)

// data type//////////////////////////////////////
// number
// String
// Boolean
// undefined
// null


// const name = "shailesh"
// const age = 23
// const contact = 111111111111
// const address = "nagpur"
// const isMarried = true
// const hisowncompany = null

// console.log(name)
// console.log(age)
// console.log(contact)
// console.log(address)
// console.log(isMarried)
// console.log(hisowncompany)
// console.log(typeof isMarried)

// operators /////////////////////////////////
// arithmatic ---> + - * / %
// conditional ----> < > ==  ===  <= >=   it return either true or false
// assignment operator--->  = += -= ++ --  assign the value in varibale
// logical ---->&& || ! it also return true or false
// ternary ----> ? : expression execute

// const num1 = 10;
// const num2 = 10;
// const ismarried = "true"
// const unmarried = true
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

// conditional///////////////////////////////
// console.log(num1>=num2);
// console.log(num1<=num2);
// console.log(num1<num2);
// console.log(num1>num2);
// console.log(num1==num2); // it only check data
// console.log(num1===num2); //it checks data as well as data type
// console.log(ismarried===unmarried); //it checks data as well as data type

// logical operator ////////////////////////////
// && ----> if both conditions are true the it returns true otherwise false
// || ----> if any condition is true the it returns true otherwise false
// ! ----> it inverse the value


// const num1 = 10;
// const num2 = 10;
// console.log(num1>num2 && num1===num2);
// // false     true
// console.log(num1===num2 && num2===num1);
// true         true

// || operator
// const num1 = 10;
// const num2 = 10;
// console.log(num1>num2 || num1===num2);  //true
// //             // false     true
// console.log(num1===num2 || num2===num1); //true
// // true         true
// console.log(num1>num2 || num2<num1); //false

// ! operator ///////////

// console.log(!true);
// ternary operator //////////
// const num1 = 10;
// const num2 = 10;

// num1== num2 ?
// num1> num2 ? console.log("num1 is greater") :
// console.log("num1 is less"):
// console.log("its true")
// console.log("its false");

// conditional statements /////////////////////////
// if-else-if /////////////////////////////////////
// const num1 = 20;
// const num2 = 10;
// if (num1 > num2) {         //true or false
//     console.log(`${num1} is greater ${num2}`)
// }
// else if (num1 === num2) {
//     console.log(`${num1} is equal to ${num2}`)
// }
// else {
//     console.log(`${num2} is greater ${num1}`)
// }

// switch case /////////////////////////////////////
// const day = "wedhhhhnesday" ;
// switch (day) {
//     case "monday":
//         console.log("monday")
//         break;
//     case "tuesday":
//         console.log("tuesday")
//         break;
//     case "wednesday":
//         console.log("wednesday")
//         break;
//     case "thursday":
//         console.log("thursday")
//         break;
//     case "friday":
//         console.log("friday")
//         break;
//     case "saturday":
//         console.log("saturday")
//         break;
//     case "sunday":
//         console.log("sunday")
//         break;
//     default:
//         console.error("pease check the day once")
//         break;
// }

// loop //////////////////////////////////////////////
// for loop ////////////////////////////

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// while loop ////////////////////////////

// let i = 0;
// while (i < 100) {
//     console.log(i);
//     i++;
// }

// 1+2+3+4+5.. .10 ///55

// var i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<100);

// string /////////////////////////////////////////////
// const name = "shailesh gokhale";
// console.log(name);
// console.log(name.length);
// console.log(name[0]);
// console.log(name.slice(0,5));
// console.log(name.charAt(5));
// const sapreatedname = name.split(" ");
// const firstname = sapreatedname[0]
// const lastname = sapreatedname[1];
// console.log(firstname);
// console.log(lastname);


// let fullname = firstname+" "+lastname;
// let fullname = firstname.concat(" ").concat(lastname)
// console.log(fullname);

// const name1 = "poonam meshram"

// if(name1.includes("poonam")){
//     console.log("she is in tops technology");
// }
// forloop in string////////////////////////////////////////////////
// for(let i=0;i<fullname.length;i++){
//     console.log(fullname[i] + " ");
// }

// ;function //////////////////////////////////////////////////////////////
// three types of function in js
// normal function
// expressive function
// arrow function

// function callMyName(){
//     console.log("shailesh");
// }
// callMyName()

// const callMyName =function(){
//     console.log("shailesh");
// }
// callMyName();

// const callMyName = ()=>{
//     console.log("shailesh");
// }
// callMyName();

// const callMyName = ()=>console.log("shailesh")
// callMyName()

// parametrised function //////////////////////////////
// const isNegative = (num) => {
//     // return num<0;
//     if (num < 0) {
//         console.log("number is negative")
//     } else {
//         console.log("number is positive")
//     }
// }
// isNegative(10);
// console.log()
// const result = isNegative(10)
// if(result){
//     console.log("number is positive")
// }else{
//     console.log("number is negative")
// }

// const isNegative = (num)=> num<0;
// const result = isNegative(10)
// console.log(result)


// home work ////////////////////////////
// 1+2+3+...10; 
// const total = (num)=>{
//     let count = 0;
//     let i=0;
//     while(i<=num){
//         count = count+i
//         i++;
//     }
//     console.log(count);
// }
// total(100)


// function inside function //////////////////////////
// function hello() {
//     console.log("hello")
//     function world() {
//         console.log("world");
//     }
//     world()
//     console.log("hello again")
// }

// hello();

// callback function //////////////////////////////////

// function xyz(name,age){
//     // console.log(`my name is ${name} and age is ${age}`)
//     // console.log("my name is "+name+" and age is "+age)
// }
// function abc(callback){
//     callback("shailesh",23);
// }
// abc(xyz);

// anonymous function ///////////////////////////////////
// ((name)=>{
//     console.log("this is anonymous function 1");
// })
// ();

// ((name)=>{
//     console.log("this is anonymous function 2");
// })
// ();
// hello();

// hoisting//////////////////////////////////////////////
// function hello(){
//     console.log("hello")
// }

// const hello=()=>{
//     console.log("hello")
// }

// console.log(name)
// var name = "shailesh"
// const name = "shailesh" ///not give output

// array //////////////////////////////////////////////////
// collection of different types of data 

// const studentsNames = ["shailesh","vinay","swapnil","vaibhav","tanushree"];
// add or remove element from end of array ///////////////////////////

// studentsNames.push("raju");
// console.log(studentsNames)
// const poppedElement = studentsNames.pop();
// console.log(poppedElement)

// add or remove element from start ////////////////////////
// studentsNames.unshift("xyz");
// console.log(studentsNames)
// studentsNames.shift();
// console.log(studentsNames)

// splice method to add or remove element from any index //////////////////
// console.log(studentsNames[studentsNames.length-1])
// console.log(studentsNames.slice(0,3))
// console.log(studentsNames)
// studentsNames.splice(2, 1,"xyz");

// clone of array /////////////////////////////////////////
// const studentsNames = ["shailesh","vinay","swapnil","vaibhav","tanushree"];
// const newarr = studentsNames;

// FIRST WAY /////////////////////////////////////////
// const newarr = [].concat(studentsNames);
// console.log(newarr)
// console.log(studentsNames===newarr)

// second way /////////////////////////////////////////
// const newarr = studentsNames.slice(0)
// console.log(newarr)
// console.log(studentsNames===newarr)

// third way //////////////////////////////////////////
// spread operator ////////////////////////////////////
// const testarr = [1,2,3,4,5,6,6]
// const newarr = [...studentsNames,"xyz","abc",...testarr];
// console.log(newarr)
// console.log(studentsNames===newarr)

// const fruits = ["grapes","apple","watermelon","lemon","tomato","papaya","chiku"];
// console.log(fruits[0]);
// let vegitables=[];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
//     if(fruits[i]=="tomato"){
//         vegitables.push(fruits[i])
//     }
// }
// console.log(vegitables)

// for of loop ///////////////////////////////////////////////
// let vegitables=[];
// const fruits = ["grapes","apple","watermelon","lemon","tomato","papaya","chiku"];
// for(let fruit of fruits){
//     console.log(fruit);
//     if(fruit==="tomato"){
//         vegitables.push(fruit);
//     }
// }
// console.log(vegitables)


// for in loop /////////////////////////////////////////////////////
// let vegitables=[];
// const fruits = ["grapes","apple","watermelon","lemon","tomato","papaya","chiku"];
// for(let index in fruits){
//     console.log(fruits[index]);
//     if(fruits[index]==="tomato"){
//         vegitables.push(fruits[index]);
//     }
// }
// console.log(vegitables)


// object /////////////////////////////////////////////////////
// store data in the form of key vaue pairs 
// it store real world data 
// const student1 = {
//     name:"pooja gokhale",
//     age:23,
//     address:"nagpur",
//     hobbies:["gaming","trkking","swimming"],
//     "is married":false,
//     parents:{
//         mother:"xyz",
//         father:"abc"
//     }
// }

// student1.name = "puja sonkusare"
// console.log(student1.name)
// console.log(student1.address)
// student1["is married"]=true ; 
// console.log(student1["is married"])

// let student = {};
// student.name = "xyz";
// student.age = 23;
// student.email = "email@email.com";
// student["is married"] = false;
// console.log(student)

// const keys = Object.keys(student);
// console.log(keys.length)
// for(let i=0;i<keys.length;i++){
//     console.log(`${keys[i]} : ${student[keys[i]]}`)
// }

// const keys = Object.keys(student)
// for (const key of keys) {
//     console.log(`${key} : ${student[key]}` );
// }

// let products = [
//     { name: "nirma", price: 230, weight: "5kg" },
//     { name: "sugar", price: 500, weight: "3kg" },
//     { name: "chilly powder", price: 800, weight: "5kg" },
//     { name: "rice", price: 900, weight: "10kg" },
//     { name: "salt", price: 400, weight: "5kg" },
//     { name: "garam masala", price: 800, weight: "7kg" }
// ];

// for of loop ///////////////////////////////////
// for (const product of products) {
//     console.log(product)
//     if (product.name === "salt") {
//         console.log(`${product.name}  ${product.price} ${product.weight}`)
//     }
// }
// for In loop ///////////////////////////////////
// for (let index in products) {
//     console.log(products[index]);
//     if (products[index].name === "salt") {
//         console.log(`${products[index].name}  ${products[index].price} ${products[index].weight}`)
//     }
// }

// console.log(products)
// for(let i=0;i<products.length;i++){
//     // console.log(products[i])
//     if(products[i].name=="salt"){
//         console.log(`${products[i].name} ${products[i].price} ${products[i].weight}`)
//     }else{
//         console.log("product is not availabel")
//     }
// }


// array methods /////////////////////////////////////
// forEach method ////////////////////////////////////

// foreach method with callback 
// it does not return anything 
// function product(item){
//     console.log(item);
//     if(item.name ==="salt"){
//         console.log(`${item.name} ${item.price} ${item.weight}`)
//     }
// }

// products.forEach(product)

// products.forEach((product) => {
//     if (product.name === "salt") {
//         console.log(`${product.name} ${product.price} ${product.weight}`)
//     }
// })

// let products = [
//     { id:1,name: "nirma", price: 230, weight: "5kg" },
//     { id:2,name: "sugar", price: 500, weight: "3kg" },
//     { id:3,name: "chilly powder", price: 800, weight: "5kg" },
//     { id:4,name: "rice", price: 900, weight: "10kg" },
//     { id:5,name: "salt", price: 400, weight: "5kg" },
//     { id:6,name: "garam masala", price: 800, weight: "7kg" }
// ];


// // map ////////////////////////////
// // it returns new array 
// const newpricedProducts = products.map((product)=>{
//     console.log(product)
//     if(product.id===2){
//         product.price=300;
//     }
//     console.log(products)
//     return product;

// })
// console.log(newpricedProducts)

// const newFiltredProducts1 = products.filter((product)=>product.price<800);
// console.log(newFiltredProducts1)
// const newFiltredProducts2 = products.filter((product)=>product.price>=800);
// console.log(newFiltredProducts2)

// find method ///////////////////////////////////////////
// let findProduct = products.find((product)=>product.id==4)
// console.log(findProduct)


// let products = [
//     { id: 1, name: "nirma", price: 230, weight: "5kg" },
//     { id: 2, name: "sugar", price: 500, weight: "3kg" },
//     { id: 3, name: "chilly powder", price: 800, weight: "5kg" },
//     { id: 4, name: "rice", price: 900, weight: "10kg" },
//     { id: 5, name: "salt", price: 400, weight: "5kg" },
//     { id: 6, name: "garam masala", price: 800, weight: "7kg" }
// ];

// const totalprice = products.reduce((totalprice, currentProduct) => {
//     return totalprice + currentProduct.price;
// },0)
// console.log(totalprice)


// const usernames = ["shailesh","swapni","akash","vaibhav","tushar"]
// console.log(usernames.sort());
// const numbers = [23,5,89,9,0,1];
// const sortedNumbers = numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log(sortedNumbers)

// let products = [
//     { id: 1, name: "nirma", price: 230, weight: "5kg" },
//     { id: 2, name: "sugar", price: 500, weight: "3kg" },
//     { id: 3, name: "chilly powder", price: 800, weight: "5kg" },
//     { id: 4, name: "rice", price: 900, weight: "10kg" },
//     { id: 5, name: "salt", price: 400, weight: "5kg" },
//     { id: 6, name: "garam masala", price: 800, weight: "7kg" }
// ];

// const sortedprices = products.sort((a,b)=>{
//     return a.price-b.price
// })
// console.log(sortedprices)

// object inside function ///////////////////////////////////
// const usermethods = {
//     myinfo: function () {
//         return `my name is ${this.name} and my age is ${this.age}, I live in ${this.adddress}`
//     },
//     callmyname:function(){
//         return `${this.name}`
//     },
// }
// const userdetails = {
//     name: "shailesh",
//     age: 23,
//     adddress: "nagpur",
//     hobbies: ["trekking", "swimming"],
//     callmyname:usermethods.callmyname,
//     myinfo:usermethods.myinfo
// }

// console.log(userdetails.myinfo())
// console.log(userdetails.callmyname())


// create user using function //////////////////////
// const usermethods = {
//     myinfo: function () {
//         return `my name is ${this.name} and my age is ${this.age}, I live in ${this.address}`
//     },
//     callmyname:function(){
//         return `${this.name}`
//     },
// }

// function createuser(name, age, address) {
//     let user = {};
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     user.myinfo = usermethods.myinfo;
//     user.callmyname = usermethods.callmyname;
//     return user;
// }

// const user1 = createuser("shailesh", 23, "nagpur");
// const user2 = createuser("vinay", 26, "wardha");
// console.log(user1)
// console.log(user2)
// console.log(user1.myinfo())



// __proto__////////////////[[prototype]]//////////////
// let obj1 = {};
// let obj2 = {
//     key1:"value1",
//     key2:"value2"
// }

// obj1 = Object.create(obj2);
// console.log(obj1);

// const usermethods = {
//     myinfo: function () {
//         return `my name is ${this.name} and my age is ${this.age}, I live in ${this.address}`
//     },
//     callmyname:function(){
//         return `${this.name}`
//     },
// }

// function createuser(name, age, address) {
//     let user = Object.create(usermethods);
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createuser("shailesh", 23, "nagpur");
// console.log(user1)
// console.log(user1.myinfo())

// prototype /////////////////////////////////////////////////
// function has its own free space 
// free space in the form of object /////////// named as prototype
// we can add anything in this prototype /////////////

// function createuser(name, age, address) {
//     let user = Object.create(createuser.prototype);
//     user.name = name;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createuser("shailesh", 23, "nagpur");
// console.log(user1)
// createuser.prototype.hobbies = ["swmming","trkking"];
// createuser.prototype.myinfo= function () {
//     return `my name is ${this.name} and my age is ${this.age}, I live in ${this.address}`
// }
// createuser.prototype.callmyname=function(){
//     return `${this.name}`
// }

// console.log(user1.callmyname())
// console.log(user1.hobbies)


// new keyword /////////////////////////////////////////////////////
// it gives this = {} ////////////////////////////////
// it return this itself ////////////
// function createuser(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     return this;
// }

// const user1 = new createuser("shailesh", 23, "nagpur");
// console.log(user1)
// createuser.prototype.hobbies = ["swmming","trkking"];
// createuser.prototype.myinfo= function () {
//     return `my name is ${this.name} and my age is ${this.age}, I live in ${this.address}`
// }
// createuser.prototype.callmyname=function(){
//     return `${this.name}`
// }

// console.log(user1.callmyname())
// console.log(user1.hobbies)

// class createuser {
//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     myinfo = function () {
//         return `my name is ${this.name} and my age is ${this.age}, I live in ${this.address}`
//     }
//     callmyname = function () {
//         return `${this.name}`
//     }
// }

// const user1 = new createuser("shailesh", 23, "nagpur");
// console.log(user1)
// const myinfo = user1.myinfo();
// console.log(myinfo)

// in javascript everything is object //////////////////
// real array 
// const arr=[1,2,3,4,5,6,7]
// const arr = new Array(1,2,3,4,5,6)
// arr.__proto__.is1exist = function(){
//     console.log(arr.includes(1))
// }
// console.log(arr)

// arr.is1exist();
// core js /////////////////////////////////////////