// Keyword --> var

//console.log(display); => Error-output : not defined

var display = "Hello World";
console.log(display);

{
    var display = "Hello Everyone";
    console.log(display);
}

function DisplayMessage(){
    var message = display;
    console.log(message);
}
//console.log(message);
DisplayMessage();



// keyword -- let

let message = "let";
console.log(message);

let two =2; 

{
    console.log(two);
}

function addition(){
    let result = 3 + two;
    console.log(result);
}
addition();


function subtraction(){
    let finalresult = 5 - result;
    console.log(finalresult);
}
// subtraction(); Error-output : result is not defined 



// keyword --> const

const name = "Raj"
console.log(name);
//name = "Aravind";
// console.log(name); Error-output : can,t re-initialize

{
    const names = "Aravind";
    console.log(names);
}

// {
//     console.log(names); // Error-output : not defined
// }


// Hoisting

displays(); 

function displays() {
  console.log("This function is hoisted");
};


// console.log(notDisplay); // Error-output : undefined

// var notDisplay = "It will show error";
