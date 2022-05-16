let result
let fnumber
let snumber
let text = document.getElementById('app')
let popup = parseInt(prompt("Enter a Number"))
switch (popup) {
    case 1: function operation (){
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber + snumber;
        return result;
        }
        break;
    
    case 2: function operation (){
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber - snumber;
        }
        break;

    case 3: function operation (){
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber * snumber;
        }
        break;

    case 4: function operation (){
        fnumber = parseInt(prompt('Please enter the first number'))
        snumber = parseInt(prompt('Please enter the second number'))
        result = fnumber / snumber;
        }
        break;
    default:
        break;
}
operation();
console.log(result)