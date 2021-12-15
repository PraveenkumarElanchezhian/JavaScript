
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
console.log(message);
DisplayMessage();
