function run7 () {
    document.getElementById ('result').value += "7";
}

function run8 () {
    document.getElementById ('result').value += "8";
}

function run9 () {
    document.getElementById ('result').value += "9";
}
function runBack () {
    document.getElementById ('result').value = document.getElementById ('result').value.replace (document.getElementById ('result').value.charAt (document.getElementById ('result').value.length - 1 ), '' );
}
function runClear () {
    document.getElementById ('result').value = "";
}
function run4 () {
    document.getElementById ('result').value += "4";
}
function run5 () {
    document.getElementById ('result').value += "5";
}
function run6 () {
    document.getElementById ('result').value += "6";
}
function runMultiply () {
    document.getElementById ('result').value += "*";
}
function runDivide () {
    document.getElementById ('result').value += "/";
}
function run1 () {
    document.getElementById ('result').value += "1";
}
function run2 () {
    document.getElementById ('result').value += "2";
}
function run3 () {
    document.getElementById ('result').value += "3";
}
function runPlus () {
    document.getElementById ('result').value += "+";
}
function runMinus () {
    document.getElementById ('result').value += "-";
}
function run0 () {
    document.getElementById ('result').value += "0";
}
function runPoint () {
    document.getElementById ('result').value += ".";
}
function runSquareValue () {
    document.getElementById ('result').value = document.getElementById ('result').value * document.getElementById ('result').value;
}

function runSquareRoot () {
    document.getElementById ('result').value = Math.sqrt (document.getElementById ('result').value );
}

function runPercentage () {
    document.getElementById ('result').value += "%";
}

function calculate () {
    var calculate = eval (document.getElementById ('result').value );
    document.getElementById ('result').value = calculate;
}
