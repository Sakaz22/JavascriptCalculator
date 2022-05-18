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
