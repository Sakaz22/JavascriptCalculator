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
const one = document.getElementById("one").textContent;
const two = document.getElementById("two").textContent;
const three = document.getElementById("three").textContent;
const four = document.getElementById("four").textContent;
const five = document.getElementById("five").textContent;
const six = document.getElementById("six").textContent;
const seven = document.getElementById("seven").textContent;
const eight = document.getElementById("eight").textContent;
const nine = document.getElementById("nine").textContent;
const zero = document.getElementById("zero").textContent;
const dot = document.getElementById("dot").textContent;
const add = document.getElementById("add").textContent;
const subtract = document.getElementById("subtract").textContent;
const divide = document.getElementById("divide").textContent;
const multiply = document.getElementById("multiply").textContent;
const equals = document.getElementById("equals").textContent;
//Combines all numbers into a single array
const numbers = [parseInt(one,two,three,four,five,six,seven,eight,nine,zero)]

const operators = [add,subtract,divide,multiply,equals]

console.log(numbers[0])
console.log(operators[0])

//Displaying the output
const calcdisplay = document.getElementById("output");

function print(){
    if(one == 1){
        calcdisplay.innerHTML = 1;
    }
    else if(two == 2){
        calcdisplay.innerHTML = 2;
    }
}