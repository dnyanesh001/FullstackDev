console.log("Hello world!");
function showInput(){
    let input= document.getElementById("userInput").value;
    alert("You enterd: " + input);
    document.getElementById("userName").innerHTML=prompt("Enter Your Name");
}
function variableExamples() {
    var a = 1;
    let b = 2;
    const c = 3;
    if (true) {
        var d = 4;
        let e = 5;
        const f = 6;
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        console.log(f);
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
// }
variableExamples();
let str1 = "Hello";
let str2 = "World";
console.log(str2 + " " + str2);
console.log(str1.endsWith(" World"));
let g = 10;
let h = 5;
console.log(g &= h);
let x = null;
console.log(x??5);
let myObject = {
    greet: function(){
        console.log("Hello from the  object");
    }
};
myObject.greet();
console.log(!!undefined);
function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += " ";
        }
        for (let k = i; k < n; k++) {
            line += "*";
        }
        console.log(line);
    }
}

// Call the function
printPattern(5);
function printPattern1(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += " ";
        }
        for (let k = i; k < n - i; k++) {
            line += "*";
        }
        console.log(line);
    }
}

// Call the function
printPattern1(5);
function printReversePattern2(n) {
    for (let i = n; i > 0; i--) {
        let line = "";
        for (let j = 0; j < n - i; j++) {
            line += " ";
        }
        for (let k = 0; k < i; k++) {
            line += "*";
        }
        console.log(line);
    }
}

// Call the function
printReversePattern2(5);

function printPattern3(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n - i - 1; j++) {
            line += " ";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += "*";
        }
        console.log(line);
    }
}

// Call the function
printPattern3(3);
try{
    setTimeout(()=>{
        try {
            console.log(Vaibhav)
        } catch (error) {
            console.log("hacking Vaibhav Suryavanshi account")
        }
    },100)    
}
catch(error){
    console.log("Balle Balle")
}
setTimeout(()=>{
    console.log("Hacking wifi....Please wait....")
},1000)
setTimeout(()=>{
    console.log("Fetching username and password.....Please wait...")
},2000)
setTimeout(()=>{
    console.log("Hacking Vaibhav's facebook id....Please wait....")
},3000)
setTimeout(()=>{
    console.log("Username and password of Vaibhav's (+91 8830215355) fetching....Please wait....")
},4000)
}
