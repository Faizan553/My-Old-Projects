// function log(){
//     console.log("Hello World")
// }






// var count = 0;
// var screen = document.getElementById ('screen');
// function increment () {
//     count++;
//     screen.innerHTML = count;
// }

// function reset () {
//     count = 0;
//     screen.innerHTML = count;
// }
// function dicrement () {
//     count--;
//     screen.innerHTML = count;
// }

// function calculate(a){
//     console.log(a)
// }


// var num1 = document.getElementById('num1');
// var num2 = document.getElementById('num2');

// function sum (){
    
//     console.log(Number(num1.value) + Number(num2.value));
//     num1.value = "";
//     num2.value = "";
    

// }
// function sum1 (){
    
//     console.log(Number(num1.value) - Number(num2.value));
//     num1.value = "";
//     num2.value = "";
    

// }
// function sum2 (){
    
//     console.log(Number(num1.value) * Number(num2.value));
//     num1.value = "";
//     num2.value = "";
    

// }
// function sum3 (){
    
//     console.log(Number(num1.value) / Number(num2.value));
//     num1.value = "";
//     num2.value = "";
    

// }
// function sum4 (){
    
//     console.log(Math.sqrt(Number(num1.value)));
//     num1.value = "";
//     num2.value = "";
    

// }
var num1;
var num2;
var operator;
var screen = document.getElementById('screen');

function assignNum(num) {
    if (operator === undefined) {
        if (num1 === undefined) {
            num1 = num.toString();
        }
        else {
            num1 = num1 + num.toString();
        }
        screen.innerHTML = num1;
    }
    else {
        if (num2 === undefined) {
            num2 = num.toString();
        }
        else {
            num2 = num2 + num.toString();
        }
        screen.innerHTML = num2;
    }
}

function assignOperator(oper) {
    operator = oper;
}

function calculate() {
    var result;
    if (operator === '+') {
        result = Number(num1) + Number(num2);
    }
    else if (operator === '-') {
        result = Number(num1) - Number(num2);
    }
    else if (operator === '*') {
        result = Number(num1) * Number(num2);
    }
    else if (operator === '/') {
        result = Number(num1) / Number(num2);
    }

    screen.innerHTML = result;

    operator = undefined;
    num1 = undefined;
    num2 = undefined;
}












