// var heading = document.getElementById("heading")
// heading.innerHTML = 'Ghous ali shah';

// var userInput = prompt('write your name')
// var userName = document.getElementById('userName')
// userName.innerHTML = userInput;



// var userInput2 = prompt('write your name')
// var userName2 = document.getElementById('h2')
// userName.innerHTML = userInput;

// var userInput = prompt('write your name')
// var userName = document.getElementById('userName')
// userName.innerHTML = userInput;
// console.log("Name" +" "+ userInput);

// var userInput2 = prompt('write your father name')
// var fathername = document.getElementById('fathername')
// fathername.innerHTML = userInput2; 
// console.log("Father Name" +" "+ userInput2);

// var userInput3 = +prompt('write your Age')
// var age = document.getElementById('age')
// age.innerHTML = userInput3; 
// console.log("age" +" "+ userInput3);

// var userInput4 = +prompt('write your Roll Number')
// var roll = document.getElementById('roll')
// roll.innerHTML = userInput4;
// console.log("Roll Num" +" "+ userInput4);


// var userInput5 = prompt('write your Insitute Name')
// var insitute = document.getElementById('insitute')
// insitute.innerHTML = userInput5;
// console.log("Insitute Name" +" "+ userInput5);




var userInput6 = +prompt('write your Maths Marks')
var maths = document.getElementById('maths')
maths.innerHTML = userInput6;
console.log("Maths" + " " + userInput6);

var userInput7 = +prompt('write your English Marks')
var english = document.getElementById('english')
english.innerHTML = userInput7;
console.log("English" + " " + userInput7);

var userInput8 = +prompt('write your Urdu Marks')
var urdu = document.getElementById('urdu')
urdu.innerHTML = userInput8;
console.log("Urdu" + " " + userInput8);

var userInput9 = +prompt('write your Science Marks')
var science = document.getElementById('science')
science.innerHTML = userInput9;
console.log("Science" + " " + userInput9);

var userInput10 = +prompt('write your Isalamiat Marks')
var islamiat = document.getElementById('islamiat')
islamiat.innerHTML = userInput10;
console.log("Islamiat" + " " + userInput10);

var total = userInput6 + userInput7 + userInput8 + userInput9 + userInput10;
var print = document.getElementById('total')
print.innerHTML = total;
console.log(print);

var per = (total / 500 * 100);
var printper = document.getElementById('per')
printper.innerHTML = per + "%";






var per1 = (userInput6 + "%");
var printper1 = document.getElementById('per1')
printper1.innerHTML = per1;


var per2 = (userInput7  + "%");
var printper2 = document.getElementById('per2')
printper2.innerHTML = per2;

var per3 = (userInput8  + "%");
var printper3 = document.getElementById('per3')
printper3.innerHTML = per3;

var per4 = (userInput9  + "%");
var printper4 = document.getElementById('per4')
printper4.innerHTML = per4;

var per5 = (userInput10 + "%");
var printper5 = document.getElementById('per5')
printper5.innerHTML = per5;


if (userInput6 >= 50) {
    var Remarks = document.getElementById('Remarks');
    Remarks.innerHTML = 'Passed';
    value = true;
}
else if (userInput6 <= 49) {
    var Remarks = document.getElementById('Remarks');
    Remarks.innerHTML = "<span>Failed</span>";
}


if (userInput7 >= 50) {
    var Remarks1 = document.getElementById('Remarks1');
    Remarks1.innerHTML = 'Passed';
}
else if (userInput7 <= 49) {
    var Remarks1 = document.getElementById('Remarks1');
    Remarks1.innerHTML = "<span>Failed</span>";
}

if (userInput8 >= 50) {
    var Remarks2 = document.getElementById('Remarks2');
    Remarks2.innerHTML = 'Passed';
}
else if (userInput8 <= 49) {
    var Remarks2 = document.getElementById('Remarks2');
    Remarks2.innerHTML = "<span>Failed</span>";
}

if (userInput9 >= 50) {
    var Remarks3 = document.getElementById('Remarks3');
    Remarks3.innerHTML = 'Passed';
}
else if (userInput9 <= 49) {
    var Remarks3 = document.getElementById('Remarks3');
    Remarks3.innerHTML = "<span>Failed</span>";
}

if (userInput10 >= 50) {
    var Remarks4 = document.getElementById('Remarks4');
    Remarks4.innerHTML = 'Passed';
}
else if (userInput10 <= 49) {
    var Remarks4 = document.getElementById('Remarks4');
    Remarks4.innerHTML = "<span>Failed</span>";
}



if (per >= 90) {
    var grade = document.getElementById('grade');
    grade.innerHTML = 'A+1';


}
else if (per >= 80) {
    var grade = document.getElementById('grade');
    grade.innerHTML = 'A';
}
else if (per >= 70) {
    var grade = document.getElementById('grade');
    grade.innerHTML = 'B';
}
else if (per >= 60) {
    var grade = document.getElementById('grade');
    grade.innerHTML = 'C';
}
else if (per >= 50) {
    var grade = document.getElementById('grade');
    grade.innerHTML = 'D';
}
else if (per <= 49) {
    var grade = document.getElementById('grade');
    grade.innerHTML = 'Failed';
}


var total2 = userInput6 + userInput7 + userInput8 + userInput9 + userInput10;
var print1 = document.getElementById('total2')
print1.innerHTML = total2;












var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

// numToWords :: (Number a, String a) => a -> String
let numToWords = n => {
    let a = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let b = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let g = [
        '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
        'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
    ];
    // this part is really nasty still
    // it might edit this again later to show how Monoids could fix this up
    let makeGroup = ([ones, tens, huns]) => {
        return [
            num(huns) === 0 ? '' : a[huns] + ' hundred ',
            num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
            a[tens + ones] || a[ones]
        ].join('');
    };
    // "thousands" constructor; no real good names for this, i guess
    let thousand = (group, i) => group === '' ? group : `${group} ${g[i]}`;
    // execute !
    if (typeof n === 'number') return numToWords(String(n));
    if (n === '0') return 'zero';
    return comp(chunk(3))(reverse)(arr(n))
        .map(makeGroup)
        .map(thousand)
        .filter(comp(not)(isEmpty))
        .reverse()
        .join(' ');
};

const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0, n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f(g(x));
const not = x => !x;
const chunk = n => xs =>
    isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];

var print1 = document.getElementById('total2')
print1.innerHTML = (numToWords(total2));



