console.log("hello");

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