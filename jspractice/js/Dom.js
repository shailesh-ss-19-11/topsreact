// # --- >id
// . --- >class
// tag <h1>--->class
console.dir(document)


// let obj= {
//     name:"xyz",
//     age:23
// }
// obj.name="abc"
// console.log(obj)

const heading1 = document.getElementById("heading1");
console.dir(heading1);
heading1.textContent="this heading is changed"

const headings = document.getElementsByClassName("heading") // it return htmlcolection that is array like object
console.log(headings)
for (let i = 0; i < headings.length; i++) {
    if (headings[i].textContent === "this is third  heading") {
        headings[i].style.backgroundColor = "red"
        headings[i].style.color = "white"
        headings[i].style.textDecoration = "underline"
        // headings[i].style.display = "none"
    }
}
// school1978@
