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
