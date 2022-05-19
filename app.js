let result
let fnumber
let snumber
let text = document.getElementById('app')


let btn = document.getElementById('startFtn')

btn.onclick = function startCalculator(){
let popup = parseInt(prompt("Enter a Number"))

let output = document.getElementById("output")

switch (popup) {
    case 1:
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber + snumber;
        output.textContent = result;
        break;
    
    case 2: 
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber - snumber;
        output.textContent = result;
        break;

    case 3: 
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber * snumber;
        output.textContent = result;
        break;

    case 4:
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber / snumber;
        output.textContent = result;
        break;
        
    default:
        break;
}
}

// The numbers
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let equals = document.getElementById("equals");

let numbers = [one,two,three,four,five,six,seven,eight,nine,zero]

console.log(numbers)