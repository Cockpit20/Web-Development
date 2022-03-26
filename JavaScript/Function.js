console.log("This is Functions Tutorial");

let name1="Harry";
let name2="Subham";
let greetText="Good Morning";

function greet(name, greetText="Greetings from JavaScript"){
    let name1="Name1"; 
    //Scope : Inside the function block only
    console.log(greetText+" "+name);
    console.log(name+" is a good boy");
}

//Call by reference
greet(name1,greetText);
greet(name2);

function sum (a,b,c){
    let d=a+b+c;
    return d;
}

//Call by value
let returnVal=sum(5,10,15);
console.log(returnVal);